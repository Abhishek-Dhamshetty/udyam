
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model UdyamUser
 * 
 */
export type UdyamUser = $Result.DefaultSelection<Prisma.$UdyamUserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UdyamUsers
 * const udyamUsers = await prisma.udyamUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more UdyamUsers
   * const udyamUsers = await prisma.udyamUser.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.udyamUser`: Exposes CRUD operations for the **UdyamUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UdyamUsers
    * const udyamUsers = await prisma.udyamUser.findMany()
    * ```
    */
  get udyamUser(): Prisma.UdyamUserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    UdyamUser: 'UdyamUser'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "udyamUser"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UdyamUser: {
        payload: Prisma.$UdyamUserPayload<ExtArgs>
        fields: Prisma.UdyamUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UdyamUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdyamUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UdyamUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdyamUserPayload>
          }
          findFirst: {
            args: Prisma.UdyamUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdyamUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UdyamUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdyamUserPayload>
          }
          findMany: {
            args: Prisma.UdyamUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdyamUserPayload>[]
          }
          create: {
            args: Prisma.UdyamUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdyamUserPayload>
          }
          createMany: {
            args: Prisma.UdyamUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UdyamUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdyamUserPayload>[]
          }
          delete: {
            args: Prisma.UdyamUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdyamUserPayload>
          }
          update: {
            args: Prisma.UdyamUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdyamUserPayload>
          }
          deleteMany: {
            args: Prisma.UdyamUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UdyamUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UdyamUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdyamUserPayload>[]
          }
          upsert: {
            args: Prisma.UdyamUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdyamUserPayload>
          }
          aggregate: {
            args: Prisma.UdyamUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUdyamUser>
          }
          groupBy: {
            args: Prisma.UdyamUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UdyamUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UdyamUserCountArgs<ExtArgs>
            result: $Utils.Optional<UdyamUserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    udyamUser?: UdyamUserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model UdyamUser
   */

  export type AggregateUdyamUser = {
    _count: UdyamUserCountAggregateOutputType | null
    _avg: UdyamUserAvgAggregateOutputType | null
    _sum: UdyamUserSumAggregateOutputType | null
    _min: UdyamUserMinAggregateOutputType | null
    _max: UdyamUserMaxAggregateOutputType | null
  }

  export type UdyamUserAvgAggregateOutputType = {
    id: number | null
    step: number | null
  }

  export type UdyamUserSumAggregateOutputType = {
    id: number | null
    step: number | null
  }

  export type UdyamUserMinAggregateOutputType = {
    id: number | null
    aadhaar: string | null
    otp: string | null
    pan: string | null
    name: string | null
    mobile: string | null
    email: string | null
    pincode: string | null
    city: string | null
    state: string | null
    step: number | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UdyamUserMaxAggregateOutputType = {
    id: number | null
    aadhaar: string | null
    otp: string | null
    pan: string | null
    name: string | null
    mobile: string | null
    email: string | null
    pincode: string | null
    city: string | null
    state: string | null
    step: number | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UdyamUserCountAggregateOutputType = {
    id: number
    aadhaar: number
    otp: number
    pan: number
    name: number
    mobile: number
    email: number
    pincode: number
    city: number
    state: number
    step: number
    isVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UdyamUserAvgAggregateInputType = {
    id?: true
    step?: true
  }

  export type UdyamUserSumAggregateInputType = {
    id?: true
    step?: true
  }

  export type UdyamUserMinAggregateInputType = {
    id?: true
    aadhaar?: true
    otp?: true
    pan?: true
    name?: true
    mobile?: true
    email?: true
    pincode?: true
    city?: true
    state?: true
    step?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UdyamUserMaxAggregateInputType = {
    id?: true
    aadhaar?: true
    otp?: true
    pan?: true
    name?: true
    mobile?: true
    email?: true
    pincode?: true
    city?: true
    state?: true
    step?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UdyamUserCountAggregateInputType = {
    id?: true
    aadhaar?: true
    otp?: true
    pan?: true
    name?: true
    mobile?: true
    email?: true
    pincode?: true
    city?: true
    state?: true
    step?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UdyamUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UdyamUser to aggregate.
     */
    where?: UdyamUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UdyamUsers to fetch.
     */
    orderBy?: UdyamUserOrderByWithRelationInput | UdyamUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UdyamUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UdyamUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UdyamUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UdyamUsers
    **/
    _count?: true | UdyamUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UdyamUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UdyamUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UdyamUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UdyamUserMaxAggregateInputType
  }

  export type GetUdyamUserAggregateType<T extends UdyamUserAggregateArgs> = {
        [P in keyof T & keyof AggregateUdyamUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUdyamUser[P]>
      : GetScalarType<T[P], AggregateUdyamUser[P]>
  }




  export type UdyamUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UdyamUserWhereInput
    orderBy?: UdyamUserOrderByWithAggregationInput | UdyamUserOrderByWithAggregationInput[]
    by: UdyamUserScalarFieldEnum[] | UdyamUserScalarFieldEnum
    having?: UdyamUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UdyamUserCountAggregateInputType | true
    _avg?: UdyamUserAvgAggregateInputType
    _sum?: UdyamUserSumAggregateInputType
    _min?: UdyamUserMinAggregateInputType
    _max?: UdyamUserMaxAggregateInputType
  }

  export type UdyamUserGroupByOutputType = {
    id: number
    aadhaar: string
    otp: string | null
    pan: string | null
    name: string | null
    mobile: string | null
    email: string | null
    pincode: string | null
    city: string | null
    state: string | null
    step: number
    isVerified: boolean
    createdAt: Date
    updatedAt: Date
    _count: UdyamUserCountAggregateOutputType | null
    _avg: UdyamUserAvgAggregateOutputType | null
    _sum: UdyamUserSumAggregateOutputType | null
    _min: UdyamUserMinAggregateOutputType | null
    _max: UdyamUserMaxAggregateOutputType | null
  }

  type GetUdyamUserGroupByPayload<T extends UdyamUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UdyamUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UdyamUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UdyamUserGroupByOutputType[P]>
            : GetScalarType<T[P], UdyamUserGroupByOutputType[P]>
        }
      >
    >


  export type UdyamUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aadhaar?: boolean
    otp?: boolean
    pan?: boolean
    name?: boolean
    mobile?: boolean
    email?: boolean
    pincode?: boolean
    city?: boolean
    state?: boolean
    step?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["udyamUser"]>

  export type UdyamUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aadhaar?: boolean
    otp?: boolean
    pan?: boolean
    name?: boolean
    mobile?: boolean
    email?: boolean
    pincode?: boolean
    city?: boolean
    state?: boolean
    step?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["udyamUser"]>

  export type UdyamUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aadhaar?: boolean
    otp?: boolean
    pan?: boolean
    name?: boolean
    mobile?: boolean
    email?: boolean
    pincode?: boolean
    city?: boolean
    state?: boolean
    step?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["udyamUser"]>

  export type UdyamUserSelectScalar = {
    id?: boolean
    aadhaar?: boolean
    otp?: boolean
    pan?: boolean
    name?: boolean
    mobile?: boolean
    email?: boolean
    pincode?: boolean
    city?: boolean
    state?: boolean
    step?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UdyamUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "aadhaar" | "otp" | "pan" | "name" | "mobile" | "email" | "pincode" | "city" | "state" | "step" | "isVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["udyamUser"]>

  export type $UdyamUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UdyamUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      aadhaar: string
      otp: string | null
      pan: string | null
      name: string | null
      mobile: string | null
      email: string | null
      pincode: string | null
      city: string | null
      state: string | null
      step: number
      isVerified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["udyamUser"]>
    composites: {}
  }

  type UdyamUserGetPayload<S extends boolean | null | undefined | UdyamUserDefaultArgs> = $Result.GetResult<Prisma.$UdyamUserPayload, S>

  type UdyamUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UdyamUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UdyamUserCountAggregateInputType | true
    }

  export interface UdyamUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UdyamUser'], meta: { name: 'UdyamUser' } }
    /**
     * Find zero or one UdyamUser that matches the filter.
     * @param {UdyamUserFindUniqueArgs} args - Arguments to find a UdyamUser
     * @example
     * // Get one UdyamUser
     * const udyamUser = await prisma.udyamUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UdyamUserFindUniqueArgs>(args: SelectSubset<T, UdyamUserFindUniqueArgs<ExtArgs>>): Prisma__UdyamUserClient<$Result.GetResult<Prisma.$UdyamUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UdyamUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UdyamUserFindUniqueOrThrowArgs} args - Arguments to find a UdyamUser
     * @example
     * // Get one UdyamUser
     * const udyamUser = await prisma.udyamUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UdyamUserFindUniqueOrThrowArgs>(args: SelectSubset<T, UdyamUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UdyamUserClient<$Result.GetResult<Prisma.$UdyamUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UdyamUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UdyamUserFindFirstArgs} args - Arguments to find a UdyamUser
     * @example
     * // Get one UdyamUser
     * const udyamUser = await prisma.udyamUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UdyamUserFindFirstArgs>(args?: SelectSubset<T, UdyamUserFindFirstArgs<ExtArgs>>): Prisma__UdyamUserClient<$Result.GetResult<Prisma.$UdyamUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UdyamUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UdyamUserFindFirstOrThrowArgs} args - Arguments to find a UdyamUser
     * @example
     * // Get one UdyamUser
     * const udyamUser = await prisma.udyamUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UdyamUserFindFirstOrThrowArgs>(args?: SelectSubset<T, UdyamUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UdyamUserClient<$Result.GetResult<Prisma.$UdyamUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UdyamUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UdyamUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UdyamUsers
     * const udyamUsers = await prisma.udyamUser.findMany()
     * 
     * // Get first 10 UdyamUsers
     * const udyamUsers = await prisma.udyamUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const udyamUserWithIdOnly = await prisma.udyamUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UdyamUserFindManyArgs>(args?: SelectSubset<T, UdyamUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UdyamUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UdyamUser.
     * @param {UdyamUserCreateArgs} args - Arguments to create a UdyamUser.
     * @example
     * // Create one UdyamUser
     * const UdyamUser = await prisma.udyamUser.create({
     *   data: {
     *     // ... data to create a UdyamUser
     *   }
     * })
     * 
     */
    create<T extends UdyamUserCreateArgs>(args: SelectSubset<T, UdyamUserCreateArgs<ExtArgs>>): Prisma__UdyamUserClient<$Result.GetResult<Prisma.$UdyamUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UdyamUsers.
     * @param {UdyamUserCreateManyArgs} args - Arguments to create many UdyamUsers.
     * @example
     * // Create many UdyamUsers
     * const udyamUser = await prisma.udyamUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UdyamUserCreateManyArgs>(args?: SelectSubset<T, UdyamUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UdyamUsers and returns the data saved in the database.
     * @param {UdyamUserCreateManyAndReturnArgs} args - Arguments to create many UdyamUsers.
     * @example
     * // Create many UdyamUsers
     * const udyamUser = await prisma.udyamUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UdyamUsers and only return the `id`
     * const udyamUserWithIdOnly = await prisma.udyamUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UdyamUserCreateManyAndReturnArgs>(args?: SelectSubset<T, UdyamUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UdyamUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UdyamUser.
     * @param {UdyamUserDeleteArgs} args - Arguments to delete one UdyamUser.
     * @example
     * // Delete one UdyamUser
     * const UdyamUser = await prisma.udyamUser.delete({
     *   where: {
     *     // ... filter to delete one UdyamUser
     *   }
     * })
     * 
     */
    delete<T extends UdyamUserDeleteArgs>(args: SelectSubset<T, UdyamUserDeleteArgs<ExtArgs>>): Prisma__UdyamUserClient<$Result.GetResult<Prisma.$UdyamUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UdyamUser.
     * @param {UdyamUserUpdateArgs} args - Arguments to update one UdyamUser.
     * @example
     * // Update one UdyamUser
     * const udyamUser = await prisma.udyamUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UdyamUserUpdateArgs>(args: SelectSubset<T, UdyamUserUpdateArgs<ExtArgs>>): Prisma__UdyamUserClient<$Result.GetResult<Prisma.$UdyamUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UdyamUsers.
     * @param {UdyamUserDeleteManyArgs} args - Arguments to filter UdyamUsers to delete.
     * @example
     * // Delete a few UdyamUsers
     * const { count } = await prisma.udyamUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UdyamUserDeleteManyArgs>(args?: SelectSubset<T, UdyamUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UdyamUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UdyamUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UdyamUsers
     * const udyamUser = await prisma.udyamUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UdyamUserUpdateManyArgs>(args: SelectSubset<T, UdyamUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UdyamUsers and returns the data updated in the database.
     * @param {UdyamUserUpdateManyAndReturnArgs} args - Arguments to update many UdyamUsers.
     * @example
     * // Update many UdyamUsers
     * const udyamUser = await prisma.udyamUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UdyamUsers and only return the `id`
     * const udyamUserWithIdOnly = await prisma.udyamUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UdyamUserUpdateManyAndReturnArgs>(args: SelectSubset<T, UdyamUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UdyamUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UdyamUser.
     * @param {UdyamUserUpsertArgs} args - Arguments to update or create a UdyamUser.
     * @example
     * // Update or create a UdyamUser
     * const udyamUser = await prisma.udyamUser.upsert({
     *   create: {
     *     // ... data to create a UdyamUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UdyamUser we want to update
     *   }
     * })
     */
    upsert<T extends UdyamUserUpsertArgs>(args: SelectSubset<T, UdyamUserUpsertArgs<ExtArgs>>): Prisma__UdyamUserClient<$Result.GetResult<Prisma.$UdyamUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UdyamUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UdyamUserCountArgs} args - Arguments to filter UdyamUsers to count.
     * @example
     * // Count the number of UdyamUsers
     * const count = await prisma.udyamUser.count({
     *   where: {
     *     // ... the filter for the UdyamUsers we want to count
     *   }
     * })
    **/
    count<T extends UdyamUserCountArgs>(
      args?: Subset<T, UdyamUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UdyamUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UdyamUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UdyamUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UdyamUserAggregateArgs>(args: Subset<T, UdyamUserAggregateArgs>): Prisma.PrismaPromise<GetUdyamUserAggregateType<T>>

    /**
     * Group by UdyamUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UdyamUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UdyamUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UdyamUserGroupByArgs['orderBy'] }
        : { orderBy?: UdyamUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UdyamUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUdyamUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UdyamUser model
   */
  readonly fields: UdyamUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UdyamUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UdyamUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UdyamUser model
   */
  interface UdyamUserFieldRefs {
    readonly id: FieldRef<"UdyamUser", 'Int'>
    readonly aadhaar: FieldRef<"UdyamUser", 'String'>
    readonly otp: FieldRef<"UdyamUser", 'String'>
    readonly pan: FieldRef<"UdyamUser", 'String'>
    readonly name: FieldRef<"UdyamUser", 'String'>
    readonly mobile: FieldRef<"UdyamUser", 'String'>
    readonly email: FieldRef<"UdyamUser", 'String'>
    readonly pincode: FieldRef<"UdyamUser", 'String'>
    readonly city: FieldRef<"UdyamUser", 'String'>
    readonly state: FieldRef<"UdyamUser", 'String'>
    readonly step: FieldRef<"UdyamUser", 'Int'>
    readonly isVerified: FieldRef<"UdyamUser", 'Boolean'>
    readonly createdAt: FieldRef<"UdyamUser", 'DateTime'>
    readonly updatedAt: FieldRef<"UdyamUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UdyamUser findUnique
   */
  export type UdyamUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdyamUser
     */
    select?: UdyamUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdyamUser
     */
    omit?: UdyamUserOmit<ExtArgs> | null
    /**
     * Filter, which UdyamUser to fetch.
     */
    where: UdyamUserWhereUniqueInput
  }

  /**
   * UdyamUser findUniqueOrThrow
   */
  export type UdyamUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdyamUser
     */
    select?: UdyamUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdyamUser
     */
    omit?: UdyamUserOmit<ExtArgs> | null
    /**
     * Filter, which UdyamUser to fetch.
     */
    where: UdyamUserWhereUniqueInput
  }

  /**
   * UdyamUser findFirst
   */
  export type UdyamUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdyamUser
     */
    select?: UdyamUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdyamUser
     */
    omit?: UdyamUserOmit<ExtArgs> | null
    /**
     * Filter, which UdyamUser to fetch.
     */
    where?: UdyamUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UdyamUsers to fetch.
     */
    orderBy?: UdyamUserOrderByWithRelationInput | UdyamUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UdyamUsers.
     */
    cursor?: UdyamUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UdyamUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UdyamUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UdyamUsers.
     */
    distinct?: UdyamUserScalarFieldEnum | UdyamUserScalarFieldEnum[]
  }

  /**
   * UdyamUser findFirstOrThrow
   */
  export type UdyamUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdyamUser
     */
    select?: UdyamUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdyamUser
     */
    omit?: UdyamUserOmit<ExtArgs> | null
    /**
     * Filter, which UdyamUser to fetch.
     */
    where?: UdyamUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UdyamUsers to fetch.
     */
    orderBy?: UdyamUserOrderByWithRelationInput | UdyamUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UdyamUsers.
     */
    cursor?: UdyamUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UdyamUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UdyamUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UdyamUsers.
     */
    distinct?: UdyamUserScalarFieldEnum | UdyamUserScalarFieldEnum[]
  }

  /**
   * UdyamUser findMany
   */
  export type UdyamUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdyamUser
     */
    select?: UdyamUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdyamUser
     */
    omit?: UdyamUserOmit<ExtArgs> | null
    /**
     * Filter, which UdyamUsers to fetch.
     */
    where?: UdyamUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UdyamUsers to fetch.
     */
    orderBy?: UdyamUserOrderByWithRelationInput | UdyamUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UdyamUsers.
     */
    cursor?: UdyamUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UdyamUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UdyamUsers.
     */
    skip?: number
    distinct?: UdyamUserScalarFieldEnum | UdyamUserScalarFieldEnum[]
  }

  /**
   * UdyamUser create
   */
  export type UdyamUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdyamUser
     */
    select?: UdyamUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdyamUser
     */
    omit?: UdyamUserOmit<ExtArgs> | null
    /**
     * The data needed to create a UdyamUser.
     */
    data: XOR<UdyamUserCreateInput, UdyamUserUncheckedCreateInput>
  }

  /**
   * UdyamUser createMany
   */
  export type UdyamUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UdyamUsers.
     */
    data: UdyamUserCreateManyInput | UdyamUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UdyamUser createManyAndReturn
   */
  export type UdyamUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdyamUser
     */
    select?: UdyamUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UdyamUser
     */
    omit?: UdyamUserOmit<ExtArgs> | null
    /**
     * The data used to create many UdyamUsers.
     */
    data: UdyamUserCreateManyInput | UdyamUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UdyamUser update
   */
  export type UdyamUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdyamUser
     */
    select?: UdyamUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdyamUser
     */
    omit?: UdyamUserOmit<ExtArgs> | null
    /**
     * The data needed to update a UdyamUser.
     */
    data: XOR<UdyamUserUpdateInput, UdyamUserUncheckedUpdateInput>
    /**
     * Choose, which UdyamUser to update.
     */
    where: UdyamUserWhereUniqueInput
  }

  /**
   * UdyamUser updateMany
   */
  export type UdyamUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UdyamUsers.
     */
    data: XOR<UdyamUserUpdateManyMutationInput, UdyamUserUncheckedUpdateManyInput>
    /**
     * Filter which UdyamUsers to update
     */
    where?: UdyamUserWhereInput
    /**
     * Limit how many UdyamUsers to update.
     */
    limit?: number
  }

  /**
   * UdyamUser updateManyAndReturn
   */
  export type UdyamUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdyamUser
     */
    select?: UdyamUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UdyamUser
     */
    omit?: UdyamUserOmit<ExtArgs> | null
    /**
     * The data used to update UdyamUsers.
     */
    data: XOR<UdyamUserUpdateManyMutationInput, UdyamUserUncheckedUpdateManyInput>
    /**
     * Filter which UdyamUsers to update
     */
    where?: UdyamUserWhereInput
    /**
     * Limit how many UdyamUsers to update.
     */
    limit?: number
  }

  /**
   * UdyamUser upsert
   */
  export type UdyamUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdyamUser
     */
    select?: UdyamUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdyamUser
     */
    omit?: UdyamUserOmit<ExtArgs> | null
    /**
     * The filter to search for the UdyamUser to update in case it exists.
     */
    where: UdyamUserWhereUniqueInput
    /**
     * In case the UdyamUser found by the `where` argument doesn't exist, create a new UdyamUser with this data.
     */
    create: XOR<UdyamUserCreateInput, UdyamUserUncheckedCreateInput>
    /**
     * In case the UdyamUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UdyamUserUpdateInput, UdyamUserUncheckedUpdateInput>
  }

  /**
   * UdyamUser delete
   */
  export type UdyamUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdyamUser
     */
    select?: UdyamUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdyamUser
     */
    omit?: UdyamUserOmit<ExtArgs> | null
    /**
     * Filter which UdyamUser to delete.
     */
    where: UdyamUserWhereUniqueInput
  }

  /**
   * UdyamUser deleteMany
   */
  export type UdyamUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UdyamUsers to delete
     */
    where?: UdyamUserWhereInput
    /**
     * Limit how many UdyamUsers to delete.
     */
    limit?: number
  }

  /**
   * UdyamUser without action
   */
  export type UdyamUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdyamUser
     */
    select?: UdyamUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdyamUser
     */
    omit?: UdyamUserOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UdyamUserScalarFieldEnum: {
    id: 'id',
    aadhaar: 'aadhaar',
    otp: 'otp',
    pan: 'pan',
    name: 'name',
    mobile: 'mobile',
    email: 'email',
    pincode: 'pincode',
    city: 'city',
    state: 'state',
    step: 'step',
    isVerified: 'isVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UdyamUserScalarFieldEnum = (typeof UdyamUserScalarFieldEnum)[keyof typeof UdyamUserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UdyamUserWhereInput = {
    AND?: UdyamUserWhereInput | UdyamUserWhereInput[]
    OR?: UdyamUserWhereInput[]
    NOT?: UdyamUserWhereInput | UdyamUserWhereInput[]
    id?: IntFilter<"UdyamUser"> | number
    aadhaar?: StringFilter<"UdyamUser"> | string
    otp?: StringNullableFilter<"UdyamUser"> | string | null
    pan?: StringNullableFilter<"UdyamUser"> | string | null
    name?: StringNullableFilter<"UdyamUser"> | string | null
    mobile?: StringNullableFilter<"UdyamUser"> | string | null
    email?: StringNullableFilter<"UdyamUser"> | string | null
    pincode?: StringNullableFilter<"UdyamUser"> | string | null
    city?: StringNullableFilter<"UdyamUser"> | string | null
    state?: StringNullableFilter<"UdyamUser"> | string | null
    step?: IntFilter<"UdyamUser"> | number
    isVerified?: BoolFilter<"UdyamUser"> | boolean
    createdAt?: DateTimeFilter<"UdyamUser"> | Date | string
    updatedAt?: DateTimeFilter<"UdyamUser"> | Date | string
  }

  export type UdyamUserOrderByWithRelationInput = {
    id?: SortOrder
    aadhaar?: SortOrder
    otp?: SortOrderInput | SortOrder
    pan?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    pincode?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    step?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UdyamUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    aadhaar?: string
    AND?: UdyamUserWhereInput | UdyamUserWhereInput[]
    OR?: UdyamUserWhereInput[]
    NOT?: UdyamUserWhereInput | UdyamUserWhereInput[]
    otp?: StringNullableFilter<"UdyamUser"> | string | null
    pan?: StringNullableFilter<"UdyamUser"> | string | null
    name?: StringNullableFilter<"UdyamUser"> | string | null
    mobile?: StringNullableFilter<"UdyamUser"> | string | null
    email?: StringNullableFilter<"UdyamUser"> | string | null
    pincode?: StringNullableFilter<"UdyamUser"> | string | null
    city?: StringNullableFilter<"UdyamUser"> | string | null
    state?: StringNullableFilter<"UdyamUser"> | string | null
    step?: IntFilter<"UdyamUser"> | number
    isVerified?: BoolFilter<"UdyamUser"> | boolean
    createdAt?: DateTimeFilter<"UdyamUser"> | Date | string
    updatedAt?: DateTimeFilter<"UdyamUser"> | Date | string
  }, "id" | "aadhaar">

  export type UdyamUserOrderByWithAggregationInput = {
    id?: SortOrder
    aadhaar?: SortOrder
    otp?: SortOrderInput | SortOrder
    pan?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    pincode?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    step?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UdyamUserCountOrderByAggregateInput
    _avg?: UdyamUserAvgOrderByAggregateInput
    _max?: UdyamUserMaxOrderByAggregateInput
    _min?: UdyamUserMinOrderByAggregateInput
    _sum?: UdyamUserSumOrderByAggregateInput
  }

  export type UdyamUserScalarWhereWithAggregatesInput = {
    AND?: UdyamUserScalarWhereWithAggregatesInput | UdyamUserScalarWhereWithAggregatesInput[]
    OR?: UdyamUserScalarWhereWithAggregatesInput[]
    NOT?: UdyamUserScalarWhereWithAggregatesInput | UdyamUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UdyamUser"> | number
    aadhaar?: StringWithAggregatesFilter<"UdyamUser"> | string
    otp?: StringNullableWithAggregatesFilter<"UdyamUser"> | string | null
    pan?: StringNullableWithAggregatesFilter<"UdyamUser"> | string | null
    name?: StringNullableWithAggregatesFilter<"UdyamUser"> | string | null
    mobile?: StringNullableWithAggregatesFilter<"UdyamUser"> | string | null
    email?: StringNullableWithAggregatesFilter<"UdyamUser"> | string | null
    pincode?: StringNullableWithAggregatesFilter<"UdyamUser"> | string | null
    city?: StringNullableWithAggregatesFilter<"UdyamUser"> | string | null
    state?: StringNullableWithAggregatesFilter<"UdyamUser"> | string | null
    step?: IntWithAggregatesFilter<"UdyamUser"> | number
    isVerified?: BoolWithAggregatesFilter<"UdyamUser"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UdyamUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UdyamUser"> | Date | string
  }

  export type UdyamUserCreateInput = {
    aadhaar: string
    otp?: string | null
    pan?: string | null
    name?: string | null
    mobile?: string | null
    email?: string | null
    pincode?: string | null
    city?: string | null
    state?: string | null
    step?: number
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UdyamUserUncheckedCreateInput = {
    id?: number
    aadhaar: string
    otp?: string | null
    pan?: string | null
    name?: string | null
    mobile?: string | null
    email?: string | null
    pincode?: string | null
    city?: string | null
    state?: string | null
    step?: number
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UdyamUserUpdateInput = {
    aadhaar?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    step?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UdyamUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    aadhaar?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    step?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UdyamUserCreateManyInput = {
    id?: number
    aadhaar: string
    otp?: string | null
    pan?: string | null
    name?: string | null
    mobile?: string | null
    email?: string | null
    pincode?: string | null
    city?: string | null
    state?: string | null
    step?: number
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UdyamUserUpdateManyMutationInput = {
    aadhaar?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    step?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UdyamUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    aadhaar?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    step?: IntFieldUpdateOperationsInput | number
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UdyamUserCountOrderByAggregateInput = {
    id?: SortOrder
    aadhaar?: SortOrder
    otp?: SortOrder
    pan?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    pincode?: SortOrder
    city?: SortOrder
    state?: SortOrder
    step?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UdyamUserAvgOrderByAggregateInput = {
    id?: SortOrder
    step?: SortOrder
  }

  export type UdyamUserMaxOrderByAggregateInput = {
    id?: SortOrder
    aadhaar?: SortOrder
    otp?: SortOrder
    pan?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    pincode?: SortOrder
    city?: SortOrder
    state?: SortOrder
    step?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UdyamUserMinOrderByAggregateInput = {
    id?: SortOrder
    aadhaar?: SortOrder
    otp?: SortOrder
    pan?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    pincode?: SortOrder
    city?: SortOrder
    state?: SortOrder
    step?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UdyamUserSumOrderByAggregateInput = {
    id?: SortOrder
    step?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}