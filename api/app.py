from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# 🔹 Données fixes
users = [
    {"id": 1, "name": "Arthur"},
    {"id": 2, "name": "Sophie"},
    {"id": 3, "name": "Lucas"}
]

posts = [
    {"id": 1, "title": "Post 1", "content": "Contenu 1", "userId": 1},
    {"id": 2, "title": "Post 2", "content": "Contenu 2", "userId": 1},
    {"id": 3, "title": "Post 3", "content": "Contenu 3", "userId": 2}
]

documents = [
    {"id": 1, "name": "Doc 1", "url": "http://example.com/doc1"},
    {"id": 2, "name": "Doc 2", "url": "http://example.com/doc2"},
    {"id": 3, "name": "Doc 3", "url": "http://example.com/doc3"}
]

# 👤 USERS
@app.route("/api/users", methods=["GET"])
def get_users():
    return jsonify(users)

# 📝 POSTS
@app.route("/api/users/<int:userId>/posts", methods=["GET"])
def get_posts(userId):
    user_posts = [post for post in posts if post["userId"] == userId]
    return jsonify(user_posts)

# 📄 DOCUMENTS
@app.route("/api/documents", methods=["GET"])
def get_documents():
    return jsonify(documents)

if __name__ == "__main__":
    app.run(debug=True)