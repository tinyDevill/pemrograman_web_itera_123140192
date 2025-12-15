def includeme(config):
    config.add_static_view('static', 'static', cache_max_age=3600)
    config.add_route('home', '/')
    
    # Routes Matakuliah
    config.add_route('matakuliah_collection', '/api/matakuliah') # Untuk GET all & POST
    config.add_route('matakuliah_item', '/api/matakuliah/{id}')  # Untuk GET one, PUT, DELETE
