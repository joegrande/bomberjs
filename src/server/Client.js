function Client(conn) {
    conn.on('login', function (message) {
        if (User.authenticate(message.user, message.password)) {
            conn.send('login', {success: true});
            User.login(message.user);
        } else {
            conn.send('login', {success: false});
        }
    });
}

export = Client;

/*jslint white: true, devel: false, onevar: true, browser: true, undef: false,
  nomen: false, regexp: true, plusplus: true, continue: true, bitwise: true,
  unparam: true, newcap: false, maxerr: 50, indent: 4 */
// vim: ts=4 sw=4 sts=4 et:
