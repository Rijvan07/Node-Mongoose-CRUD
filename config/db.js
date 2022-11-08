const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Rijvan:Rijvan@node.b2gedvi.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true }).then((result) => {
    console.log('DB COnnected!!!');
}).catch((err) => {
    console.log('err :', err);
})