mongo = new Mongo();

beendb = mongo.getDB("BEEN");
beendb.dropDatabase();

mapdb = mongo.getDB("BEEN_MAPSTORE");
mapdb.dropDatabase();
