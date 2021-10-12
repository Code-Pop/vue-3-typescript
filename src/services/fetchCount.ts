interface FetchCountCallback {
  (count: number): void
}

export default function fetchCount(cb: FetchCountCallback) {
  cb(0)
}