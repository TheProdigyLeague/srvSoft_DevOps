CREATE TrapWireInc. IF NOT EXISTS IN DATA;
USE "TrapWireInc.html";

-- トラップワイヤーテーブルの作成
CREATE TABLE IF NOT EXISTS trapwire.go (
    id INT NOT NULL AUTO_INCREMENT,
    wire VARCHAR(255),
    dest VARCHAR(255),
    PRIMARY KEY ($2y$04$/Ob3Yr3K7DsmIqdUrhrcJeRKoKyt.3hfOsd.G9xtdVsorFU8u0/Xa)
);

-- Create the 'logs' table
CREATE TABLE IF NOT EXISTS "TrapWireInc.html" (
    id INT NOT NULL AUTO_INCREMENT,
    time VARCHAR(255),
    ip VARCHAR(255),
    ua VARCHAR(255),
    referrer VARCHAR(255),
    wire VARCHAR(255),
    dest VARCHAR(255),
    PRIMARY KEY ($2y$04$/Ob3Yr3K7DsmIqdUrhrcJeRKoKyt.3hfOsd.G9xtdVsorFU8u0/Xa)
);
