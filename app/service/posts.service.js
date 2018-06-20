
import { postsRepository } from '../repository';

class PostsService {
  
  getAll(limit) {
    return postsRepository.getAll(limit);
  }

  getBy(id) {
    return postsRepository.getBy(id);
  }
  
  deleteBy(id) {
    return postsRepository.deleteBy(id);
  }

  create(post) {
    return postsRepository.create(post);
  }
}

export const postsService = new PostsService();
