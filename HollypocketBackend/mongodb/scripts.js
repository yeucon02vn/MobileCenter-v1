new Mongo();
conn = new Mongo();
db = conn.getDB("HollyStoreDb");
db.createCollection("Books");
load("product.js");
load("account.js");
load("question.js");
load("warehouse.js");
load("order.js");
load("cart.js");
load("favorite.js");
load("provider.js");
load("review.js");