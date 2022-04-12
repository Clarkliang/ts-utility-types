```typescript
type Obj = {
  key1: "value1";
  key2: "value2";
  key3: "value3";
};

/*
  {
    key1: "value1";
    key2?: "value2";
    key3?: "value3";
  } &
  {
    key1?: "value1";
    key2: "value2";
    key3?: "value3";
  } &
  {
    key1?: "value1";
    key2?: "value2";
    key3: "value3";
  }
 */
type ObjAtLeastOne = AtLeastOne<Obj>;

/*
  {
    key1: "value1";
    key2: "value2";
    key3?: "value3";
  } &
  {
    key1?: "value1";
    key2: "value2";
    key3: "value3";
  } &
  {
    key1: "value1";
    key2?: "value2";
    key3: "value3";
  }
 */
type ObjAtLeastTwo = AtLeastN<obj, 2>;
```
