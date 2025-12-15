from pyramid.view import view_config
from pyramid.response import Response
from sqlalchemy.exc import DBAPIError
from ..models import Matakuliah
from sqlalchemy.exc import SQLAlchemyError

from .. import models


@view_config(route_name='home', renderer='myproject:templates/mytemplate.jinja2')
def my_view(request):
    try:
        query = request.dbsession.query(models.MyModel)
        one = query.filter(models.MyModel.name == 'one').one()
    except SQLAlchemyError:
        return Response(db_err_msg, content_type='text/plain', status=500)
    return {'one': one, 'project': 'myproject'}


db_err_msg = """\
Pyramid is having a problem using your SQL database.  The problem
might be caused by one of the following things:

1.  You may need to initialize your database tables with `alembic`.
    Check your README.txt for descriptions and try to run it.

2.  Your database server may not be running.  Check that the
    database server referred to by the "sqlalchemy.url" setting in
    your "development.ini" file is running.

After you fix the problem, please restart the Pyramid application to
try it again.
"""

# 1. GET ALL
@view_config(route_name='matakuliah_collection', request_method='GET', renderer='json')
def get_all_matakuliah(request):
    try:
        query = request.dbsession.query(Matakuliah)
        matakuliahs = query.all()
        return {'matakuliahs': [mk.to_dict() for mk in matakuliahs]}
    except DBAPIError:
        return Response(json={'error': 'Database error'}, status=500)
    
# 2. POST (Create)
@view_config(route_name='matakuliah_collection', request_method='POST', renderer='json')
def create_matakuliah(request):
    try:
        # Ambil data dari body JSON
        data = request.json_body
        new_mk = Matakuliah(
            kode_mk=data['kode_mk'],
            nama_mk=data['nama_mk'],
            sks=data['sks'],
            semester=data['semester']
        )
        request.dbsession.add(new_mk)
        request.dbsession.flush() # Agar ID ter-generate
        return new_mk.to_dict()
    except Exception as e:
        request.response.status = 400
        return {'error': str(e)}

# 3. GET ONE (Detail)
@view_config(route_name='matakuliah_item', request_method='GET', renderer='json')
def get_one_matakuliah(request):
    mk_id = request.matchdict['id']
    mk = request.dbsession.query(Matakuliah).filter(Matakuliah.id == mk_id).first()
    if mk:
        return mk.to_dict()
    request.response.status = 404
    return {'error': 'Matakuliah not found'}

# 4. PUT (Update)
@view_config(route_name='matakuliah_item', request_method='PUT', renderer='json')
def update_matakuliah(request):
    mk_id = request.matchdict['id']
    mk = request.dbsession.query(Matakuliah).filter(Matakuliah.id == mk_id).first()
    
    if not mk:
        request.response.status = 404
        return {'error': 'Matakuliah not found'}
    
    data = request.json_body
    # Update field
    mk.kode_mk = data.get('kode_mk', mk.kode_mk)
    mk.nama_mk = data.get('nama_mk', mk.nama_mk)
    mk.sks = data.get('sks', mk.sks)
    mk.semester = data.get('semester', mk.semester)
    
    return mk.to_dict()

# 5. DELETE
@view_config(route_name='matakuliah_item', request_method='DELETE', renderer='json')
def delete_matakuliah(request):
    mk_id = request.matchdict['id']
    mk = request.dbsession.query(Matakuliah).filter(Matakuliah.id == mk_id).first()
    
    if not mk:
        request.response.status = 404
        return {'error': 'Matakuliah not found'}
    
    request.dbsession.delete(mk)
    return {'message': 'Matakuliah deleted'}