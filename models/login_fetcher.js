export class Login {
  #headers
  #body
  #method
  #url

  #res

  constructor(headers, body, method, url) {
    this.#headers = headers;
    this.#body = body;
    this.#method = method;
    this.#url = url;
  }

  fetcher() {
    fetch(this.#url, {
      "headers": this.#headers,
      "body": this.#body,
      "method": this.#method
    }).then(res => this.#res = res,
    )
    return this
  }

  get getResponse() {
    return this.#res
  }

}