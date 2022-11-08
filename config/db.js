const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/server', { useNewUrlParser: true, useUnifiedTopology: true }).then((result) => {
    console.log('DB COnnected!!!');
}).catch((err) => {
    console.log('err :', err);
})