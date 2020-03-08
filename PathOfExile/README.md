## Path of Exile Trade

### Usage

Repository clone
```bash
$ git clone https://github.com/wgnodejsstudy/nodejs.git
```

로컬 repository에서 아래 명령어를 실행. `localhost:3000` 페이지가 열리면서 `Hello Path of Exile`이 화면에 출력되면 성공!
```bash
$ git checkout feature/poe-trade
$ cd PathOfExile/poe-trade
$ npm install
$ npm start
```



*****
PathOfEile test code
*****

1. http://api.pathofexile.com/public-stash-tabs
    - poe.ninja 거래소는 여기서 정보얻어옴
    - https://pathofexile.gamepedia.com/Public_stash_tab_API (wiki)

2. https://github.com/Sergej-PoE/POE_ItemAlerter
    - Item alert code
    - 떨어지는 아이템 알람주는 코드인데 packet data 가지고 아이템마다 가지고 있는 고유 아이디 확인하는 코드
