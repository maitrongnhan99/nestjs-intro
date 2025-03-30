enum PostType {
  post = 'post',
  page = 'page',
  series = 'series',
  story = 'story',
}

enum PostStatus {
  draft = 'draft',
  published = 'published',
  scheduled = 'scheduled',
  review = 'review',
}

export { PostStatus, PostType };
