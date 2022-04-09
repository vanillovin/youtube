const baseURL = 'https://www.googleapis.com/youtube/v3';
const params = 'part=snippet&maxResults=26&regionCode=KR';

class Youtube {
  key: string;
  getRequestOptions: object;
  constructor(key: string) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  async mostPopular() {
    const response = await fetch(
      `${baseURL}/videos?${params}&chart=mostPopular&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items;
  }

  async search(query: string) {
    const response = await fetch(
      `${baseURL}/search?${params}&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items.map((item: any) => ({ ...item, id: item.id.videoId }));
  }
}

export default Youtube;
