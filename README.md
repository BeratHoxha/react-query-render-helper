# React Query Render Helper

React Query Render Helper is a lightweight and easy-to-use library that simplifies handling loading and error states for multiple queries in react-query in your React applications.

## Installation

You can install `react-query-render-helper` using npm or yarn:

```
npm install react-query-render-helper
```

or

```
yarn add react-query-render-helper
```

## Usage

With `react-query-render-helper`, you can easily handle loading and error states for multiple queries in your views. Here's an example of how to use the library:

```javascript
import { useCountryQuery, useCityQuery } from './my-queries';
import { Loader, Error } from 'antd';
import reactQueryRenderHelper from 'react-query-render-helper';

function MyComponent() {
  const { data: county, ...countryQueryAttrs } = useCountryQuery('USA');
  const { data: city, ...cityQueryAttrs } = useCityQuery('Boston');

  const AsyncStatus = reactQueryRenderHelper([countryQueryAttrs, cityQueryAttrs]);

  if (AsyncStatus) {
    // AsyncStatus will be a loader, error component, or whatever asyncQueryRenderHelper deems appropriate.
    // The parent component just defers to AsyncStatus if it exists.
    return <AsyncStatus />;
  }

  return (
    <>
      <Country city={country} />
      <City city={city} />
    </>
  );
}
```

## Optional

The `react-query-render-helper` library provides a way to customize the loader and error components, as well as their props. Here are the available options:

- `loaderProps`: props for the loader component, including the `antd` Spin component props.
- `errorProps`: props for the error component, including an `errorTitle` string prop to set the error title and an `errorMessage` string prop to set the error message.
- `loaderComponent`: override the default loader component.
- `errorComponent`: override the default error component.
- `shouldShowLoaderWhenIdle`: show the loader component while the request is idle.

These options can be passed as the second argument to the `reactQueryRenderHelper` function, like this:

```js
const AsyncStatus = reactQueryRenderHelper([countryQueryAttrs, cityQueryAttrs], {
  loaderProps: {
    withPadding: true,
  },
  errorProps: {
    errorTitle: "Oops, something went wrong.",
    errorMessage: "Please try again later.",
  },
  loaderComponent: CustomLoaderComponent,
  errorComponent: CustomErrorComponent,
  shouldShowLoaderWhenIdle: true,
});
```

Please note that the loaderComponent and errorComponent options override the default components used by the library. If you wish to use your own components while still including the antd Spin component and other props, you can use these components as a base and extend them with the desired props using the spread syntax.

## Contributing

If you find a bug or would like to contribute to the development of `react-query-render-helper`, please feel free to create an issue or submit a pull request on the GitHub repository.

## License

`react-query-render-helper` is open-source software licensed under the MIT License. See the LICENSE file for more information.
