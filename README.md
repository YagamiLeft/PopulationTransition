# リポジトリのクローン

```
git clone -b develop https://github.com/YagamiLeft/PopulationTransition.git
```

# 依存モジュールのインストール

```
cd PopulationTransition
nom ci
```

# RESAS API Key の取得

## RESAS API 利用登録

以下にアクセスし利用登録を実施  
[RESAS-API](https://opendata.resas-portal.go.jp/)

## マイページの API Key をコピー

API Key をコピー

# 環境変数ファイルを作成

```
touch .env
```

# 環境変数ファイルの修正

```
.env.sampleの内容を.envにコピーアンドペースト

.env
RESAS_API_BASE=https://opendata.resas-portal.go.jp/api/v1
RESAS_API_KEY=<RESAS API マイページでコピーしたAPI Keyを貼り付け>
```

# ツール起動

```
npm run start
```

# ツールへアクセス

以下へアクセスし起動を確認する  
http://localhost:3000/
