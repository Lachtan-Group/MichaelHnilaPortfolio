---
title: Hortenzia Registry System
description: How I created Registry system for discord bot Hortenzia that registers event handlers and commands semi-automatically.
---

# ehmmmmm neviem :3

- by mrnotgramatika

---

## I dont knooooow

kazda registry item sa sklada z nazvu itemu, napr. nazov commandu a factory (funkcia ktora vytvory dany item)

nieco nieco nazov sa da pouzit na vybranie danej factory hocikde v kode

registry pouzivaju meyers singleton pre spravnu static init order

ehmmm nieco nieco general registry class pre vsetky z ktorej sa budu dedit vsetky ostatne registries

::code-collapse
  :::code-group
  ```cpp [AbstractRegistry.cpp]
  //
  // Created by mrnotgramatika on 8/17/26.
  //

  #ifndef ABSTRACTREGISTRY_HPP
  #define ABSTRACTREGISTRY_HPP
  #include <memory>
  #include <string>
  #include <typeindex>
  #include <functional>
  #include <unordered_set>
  #include <unordered_map>
  #include <iostream>
  #include <format>

  namespace Bot::Registry {
      template<typename BaseT>
      class AbstractRegistry {
      public:
          using FactoryName = std::string;
          using Factory = std::function<std::unique_ptr<BaseT>()>;

          static std::unordered_map<FactoryName, Factory>& Factories() {
              static std::unordered_map<FactoryName, Factory> factories;
              return factories;
          }

          template<typename DerivedT>
          static bool Register(std::string_view name) {
              // static std::unordered_set<std::type_index> registered;
              // if (!registered.insert(std::type_index(typeid(DerivedT))).second)
              //     return false; // already registered

              auto [it, inserted] = Factories().emplace(std::string{name}, []() -> std::unique_ptr<BaseT> {
                  return std::make_unique<DerivedT>();
              });

              if (!inserted) {
                  std::cerr << std::format("Registry: duplicate name '{}' (registration ignored)\n", name, typeid(BaseT).name());
              }

              return inserted;
          }

          static std::unique_ptr<BaseT> Create(const std::string_view name) {
              auto& factories = Factories();
              auto it = factories.find(std::string(name));
              return it != factories.end() ? it->second() : nullptr;
          }
      };
  }

  #endif //ABSTRACTREGISTRY_HPP
  ```
  :::
::

## why

idk

### yes sir

![me](/lachtan.png){height="36" width="128"}
