# Compound Components 

When you need to implement a set of components that needs to work together, you can use the pattern Compound Component.

This means that all the components didn't do nothing if used alone. Instead, you need to build your UI composing those components.

In this repository you will find a simple example of tabs. It have the main tab provider, `<Tabs />` and other helpers, such as `<TabHeader />` and `<TabBody />`.

Both TabHeader and TabBody must live with the Tabs provider. But the oposite isn't true.

The file `/code/example.tsx` contains the code and `/code/example.spec.tsx` contains the test file. To run the tests you need to install all dependencies (I'm using yarn, so the repository has an `yarn.lock` file). Then run `yarn test`.

## Related Articles

- [React Compound Components](https://gustavosantos.dev/a/react-componentes-compostos) (Portuguese - BR)
