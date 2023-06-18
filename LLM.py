import openai
from langchain.llms import OpenAI
from langchain.chains.question_answering import load_qa_chain

def get_embedding(text, model="text-embedding-ada-002"):
   
   text = text.replace("\n", " ")
   return openai.Embedding.create(input = [text], model=model)['data'][0]['embedding']

def generate_prompt(query):
   
   prompt = "I want you to act as an education counseller and recommend potential carreer paths to the student who's graduating from his bachelor's degree and planning on moving to USA for masters. Based on the resumes below of people in industry, recommed student list of 10 skills that he needs to learn based on the query & include how Cornell University can help him achieve these skills and advance in his career by listing the relevant programs from cornell. Respond in first person, don't mention about resumes &  Give outputs in list format. Query:" + query

   return prompt

def llm(key, prompt, docs):
   
   llm = OpenAI(temperature = 0, openai_api_key = key, max_tokens= 512)
   chain = load_qa_chain(llm,chain_type = 'stuff')

   response = chain.run(input_documents = docs, question = prompt)

   return response

