class UI {
    constructor(io) {
        this.io = io;

        this.state = { message: 'Hello, World!'};

        this.io.on('connection', client => this._onClientConnect(client));
    }

    update() {
        this.io.emit('update', this.state, { for: 'everyone' });
    }

    _onClientConnect(socket) {
        console.log('client connected');
        socket.emit('update', this.state);
    }
}

module.exports = UI;
