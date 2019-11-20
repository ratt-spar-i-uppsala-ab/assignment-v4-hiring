## Framework
The framework folder is mostly a collection of interfaces (abstract classes) that can be extended by the different application layers, as well as framework-layer adapters to those interfaces. The interfaces can be seen in the `/interfaces` folder, and the adapter implementations under `/adapters`. Interfaces are not sorted into folders, but instead simply named after the layer segment they describe.

```
framework
├── adapters              <- Implementations of framework interfaces and wrappers.
├── application-services  <- Application service interfaces (IAuthenticationService, for example)
├── decorators            <- Custom decorators used by the framework
├── ddd                   <- DDD primitives
├── di                    <- The parts of the system in charge of dependency injection, starting the chain of dependency bindings and setting up routes. 
└── interfaces            <- All framework layer interfaces that are used in the system
```

## Index:
- [Domain objects](domain-objects)
- [Domain services](domain-services)
- [Application services](application-services)
- [Api controllers](api-controllers)
- [Framework](framework)
