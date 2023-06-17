import openai
import chromadb

def similarity_search(db,query):

    search_results = db.similarity_search(query, k = 2)

