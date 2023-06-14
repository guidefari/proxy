# Definition
* Proxy object enables you to intercept and redefine fundamental operations of an object.

## Native/Regular Object
- when I say native/regular, I mean an object that's not a proxy.
- `01.ts`
- Getters & Setters: When handling objects, these are the methods that retrieve or modify the contents of said object.

## Proxies
- You don't always have control of the definition of an object.
- These can come in from other packages and codebases, or user created ones if you’re making a framework/reusable library
- Creating a proxy object needs two things: the object that you want to modify, & an object with defining the modified behaviour

## Some use-cases
- Framework authoring: MobX, SolidJS, Vue and many more make use of proxies under the hood to achieve reactivity between state & UI
- Native way to handle side effects, for things like logs
- In memory cache
- Validation
- Access control

## Caveats
- Not as performant as native objects - keep the use case in mind, they aren't a silver bullet
- They can complicate code, especially if used unnecessarily