export default class Core {
  messageForm(methods, options = {}) {
    return {
      methods,
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };
  }

  async request(url, message = null) {
    try {
      const res = await fetch(url, message);
      if (!res.ok) {
        throw new Error();
      }
      return await res.json();
    } catch (error) {
      throw new Error(error);
    }
  }

  async get(url) {
    const message = this.messageForm("GET");
    return await this.request(url, message);
  }

  async post(url, payload = {}) {
    const message = this.messageForm("POST", payload);
    return await this.request(url, message);
  }

  async put(url, payload = {}) {
    const message = this.messageForm("PUT", payload);
    return await this.request(url, message);
  }

  async delete(url) {
    const message = this.messageForm("DELETE");
    return await this.request(url, message);
  }
}
