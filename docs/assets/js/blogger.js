export default class Blog {
  constructor(host) {
    this.url = new URL(host)
    this.feeds = {xml: null, json: null}
    this.posts = []
    
    bindPaths(this)
  }
  
  fetchXML(callback) {
    console.error('xml fetching method will comming soon.')
    return
  }
  
  fetchJSON(callback) {
    fetch(this.feeds.json)
      .then(response => response.json())
      .then(data => callback.call(data))
  }
}

function bindPaths(blog) {
  let u = new URL(blog.url)
  let q = new URLSearchParams
  u.path = '/feeds/default'
  
  q.set('rel', 'rss')
  u.search = q
  blog.feeds.xml = u.toString()
  
  q.set('rel', 'json')
  u.search = q
  blog.feeds.json = u.toString()
}
