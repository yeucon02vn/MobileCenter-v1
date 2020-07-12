declare namespace API {
  export interface ProductsResponseData {
    items: ProductData[]
    pagination: Pagination
  }

  interface Product {
    id: string
    productName: string
    price: number
    provider: string
    rate: number
    discount: number
    questions: any[]
    pictures: string[]
    thumbnailId: string
    quantityInStock: number
    isDeleted
  }

  export interface ProductData extends Product {
    info: Info
  }

  interface EditProductData extends Product {
    info: Info
    descriptions: string
  }

  export interface ProductEditInput {
    upPro: EditProductData
    replaceThumb?: FormData
  }

  export interface Info {
    descriptions: string[]
    tagName: string[]
  }

  export interface Pagination {
    currentPage?: number
    totalPages?: number
    pageSize?: number
    totalCount?: number
    hasPrevious?: boolean
    hasNext?: boolean
  }
  export interface Provider {
    id: string
    name: string
    description: string
  }
  export interface AccountInfo {
    id: string
    email: string
    addresses: AddressModel[]
    phoneNumber?: any
    name?: string
    password?: any
    gender?: string
    token: string
    accountType: number
  }

  export interface CartResponse {
    id: string
    userId: string
    products: Cart[]
  }

  export interface Cart {
    productId: string
    amount: number
  }

  export interface OrderInput {
    note: string
    receiverAddress: string
    orderDate: Date
    phone: string
    name: string
    cashType: string
  }

  export interface Orderinfo {
    carts?: Carts
    note?: string
    receiverAdderss?: null
    orderDate?: Date
    deliveryDate?: Date
    cashType?: string
    status?: string
  }
  export interface Carts {
    product?: Product[]
  }

  export interface GetOrdersResponse {
    id?: string
    accountId?: string
    orderinfo?: Orderinfo
    isDeleted?: boolean
  }

  export interface FavoriteResponse {
    id: string
    userId: string
    productId: string[]
  }

  export interface AccountResponse {
    info: AccountInfo
    token: string
  }

  export interface QuestionInput {
    title: string
    decriptions: string
    productId: string
  }

  export interface QuestionResponse {
    result: QuestionResult
    id: number
    exception: null
    status: number
    isCanceled: boolean
    isCompleted: boolean
    isCompletedSuccessfully: boolean
    creationOptions: number
    asyncState: null
    isFaulted: boolean
  }

  export interface QuestionResult {
    items: QuestionItem[]
    pagination: Pagination
  }

  export interface QuestionItem {
    id: string
    userId: string
    productId: string
    answer: null
    title: string
    decriptions: string
  }

  export interface GetListBoughtProductResponse {
    accountId: string
    carts: BoughtProductInfo[]
  }

  export interface BoughtProductInfo {
    productId: string
    amount: number
    name: string
    provider: string
    price: number
  }

  export interface GetListOrders {
    id: string
    accountId: string
    orderinfo: ListOrderinfo
    isDeleted: boolean
  }

  export interface ListOrderinfo {
    carts: BoughtProductInfo[]
    note: string
    receiverAdderss: string
    orderDate: Date
    name: string
    phone: string
    cashType: string
    status: string
  }

  export interface ReviewResponse {
    id?: string
    userId?: string
    productId?: string
    rate?: Rate
    userInfo?: AccountInfo
  }

  export interface Rate {
    valueRating?: number
    title?: string
    description?: string
  }

  export interface ReviewByUserResponse {
    pagination: Pagination
    items?: ReviewByUser[]
  }

  export interface ReviewByUser {
    id: string
    rate: Rate
    productInfo: Product
  }

  export interface APIResponse<T> {
    data?: T
    message?: string
    error?: boolean
  }
  export interface Feedback {
    id?: string
    email?: string
    title?: string
    description?: string
    orderId?: string
  }
}
