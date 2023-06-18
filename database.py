import pinecone

def create_index(index_name, pinecone):
    """
    Creating Pinecone index
    """
    pinecone.create_index(index_name, dimension=1536, metric = 'cosine', )

    return pinecone


def list_index(API_key, env):
    """
    Fetching the index
    """
   

    active_indexes = pinecone.list_indexes()

    if active_indexes == []:
        pinecone_obj = create_index('alumai', pinecone)
        active_indexes = ['alumai']

        return pinecone_obj, 

    return 

def init(API_key, env):
    """
    Initializing pineconeDB
    """
    pinecone.init(api_key = API_key, environment = env)

    active_indexes = pinecone.list_indexes()

    if active_indexes == []:
        pinecone.create_index("alumai", dimension=1536, metric = 'cosine' )
    


