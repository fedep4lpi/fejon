# FEJON
Axios but only with fetch api and response = response.data, ts is supported

## Installation

Use the package manager [npm](https://www.npmjs.com/package/fejon) to install foobar.

```bash
npm i fejon
```

## CDN
```html
<script src="https://cdn.jsdelivr.net/npm/fejon"></script>
```

## Usage

```javascript
import fejon from 'fejon'

const url = 'https://[url to my api]'

const logData = async () => {
  const data = await fejon.get(url)
  console.log(data)
}
data()
```
#### HTTP METHODS SUPPORTED
1. GET
2. POST
3. DELETE
4. PUT

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
