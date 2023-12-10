// const express = require('express')
// const Article = require('/model/article')
// const router = express.Router()

// router.get('/new', (req, res) => {
//   res.render('new', { article: new Article() })
// })

// router.get('/edit/:id', async (req, res) => {
//   const article = await Article.findById(req.params.id)
//   res.render('edit', { article: article })
// })

// router.get('/:slug', async (req, res) => {
//   const article = await Article.findOne({ slug: req.params.slug })
//   if (article == null) res.redirect('/')
//   res.render('show', { article: article })
// })

// router.post('/', async (req, res, next) => {
//   req.article = new Article()
//   next()
// }, saveArticleAndRedirect('new'))

// router.put('/:id', async (req, res, next) => {
//   req.article = await Article.findById(req.params.id)
//   next()
// }, saveArticleAndRedirect('edit'))

// router.delete('/:id', async (req, res) => {
//   await Article.findByIdAndDelete(req.params.id)
//   res.redirect('/')
// })

// function saveArticleAndRedirect(path) {
//   return async (req, res) => {
//     let article = req.article
//     article.title = req.body.title
//     article.description = req.body.description
//     //article.markdown = req.body.markdown
//     try {
//       article = await article.save()
//       res.redirect(`/${article.slug}`)
//     } catch (e) {
//       res.render(`/${path}`, { article: article })
//     }
//   }
// }

// module.exports = router



// function saveArticleAndRedirect(path) {
//   return async (req, res) => {
//     let article = req.article
//     article.title = req.body.title
//     article.description = req.body.description
//     article.markdown = req.body.markdown
//     try {
//       article = await article.save()
//       res.redirect(`/${article.slug}`);

     
//     } catch (e) {
//       res.render(`articles/${path}`, { article: article })
//     }
//   }
// }


// const express = require('express')
// const Article = require('./../model/article')
// const router = express.Router()




// router.get('/', async (req, res) => {
//   const articles = await Article.find().sort({ createdAt: 'desc' })
//   res.render('articles/index', { articles: articles })
// })




// router.get('/new', (req, res) => {
//   //console.log('Save route hit!');

//   res.render('articles/new', { article: new Article() })
// })

// router.get('/edit/:id', async (req, res) => {
//   const article = await Article.findById(req.params.id)
//   res.render('articles/edit', { article: article })
// })

// router.get('/:slug', async (req, res) => {
//   const article = await Article.findOne({ slug: req.params.slug })
//   if (article == null) res.redirect('/')
//   res.render('articles/show', { article: article })
// })

// router.post('/', async (req, res, next) => {
//   console.log('Save route hit!');

//   req.article = new Article()
//   next()
// }, saveArticleAndRedirect('new'))

// router.put('/:id', async (req, res, next) => {
//   req.article = await Article.findById(req.params.id)
//   next()
// }, saveArticleAndRedirect('edit'))

// router.delete('/:id', async (req, res) => {
//   await Article.findByIdAndDelete(req.params.id)
//   res.redirect('/')
// })



// function saveArticleAndRedirect(path) {
//   return async (req, res) => {
//     let article = req.article
//     article.title = req.body.title
//     article.description = req.body.description
//     article.markdown = req.body.markdown

//     try {
//       article = await article.save()
//       console.log('Article saved successfully:', article);

//       // Log some additional information about the request
//       console.log('Request body:', req.body);
//       console.log('Request params:', req.params);
//       console.log('Request query:', req.query);

//       res.redirect(`/articles/${article.slug}`);
//     } catch (e) {
//       console.error('Error saving article:', e);
//       res.render(`articles/${path}`, { article: article })
//     }
//   }
// }



// module.exports = router;



const express = require('express');
const Article = require('./../model/article');
const router = express.Router();

router.get('/', async (req, res) => {
  const articles = await Article.find().sort({ createdAt: 'desc' });
  res.render('articles/index', { articles: articles });
});

router.get('/new', (req, res) => {
  res.render('articles/new', { article: new Article() });
});

router.get('/edit/:id', async (req, res) => {
  const article = await Article.findById(req.params.id);
  res.render('articles/edit', { article: article });
});

router.get('/:slug', async (req, res) => {
  const article = await Article.findOne({ slug: req.params.slug });
  if (article == null) res.redirect('/articles');
  res.render('articles/show', { article: article });
});

router.post('/', async (req, res, next) => {
  req.article = new Article();
  next();
}, saveArticleAndRedirect('new'));

router.put('/:id', async (req, res, next) => {
  req.article = await Article.findById(req.params.id);
  next();
}, saveArticleAndRedirect('edit'));

router.delete('/:id', async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

function saveArticleAndRedirect(path) {
  return async (req, res) => {
    let article = req.article;
    article.title = req.body.title;
    article.description = req.body.description;
    article.markdown = req.body.markdown; // Assuming req.body.markdown contains the raw Markdown content

    try {
      article = await article.save();
      console.log('Article saved successfully:', article);

      // Log some additional information about the request
      console.log('Request body:', req.body);
      console.log('Request params:', req.params);
      console.log('Request query:', req.query);

      res.redirect(`/articles/${article.slug}`);
    } catch (e) {
      console.error('Error saving article:', e);
      res.render(`articles/${path}`, { article: article });
    }
  };
}

router.post('/like/:articleId', async (req, res) => {
  try {
      const articleId = req.params.articleId;

      // Find the article by ID
      const article = await Article.findById(articleId);

      // Increment the likes count
      article.likes += 1;

      // Save the updated article
      await article.save();

      res.redirect('/articles'); // Redirect to the articles page
  } catch (error) {
      console.error(error);
      res.render('error', { message: 'Error liking the article' });
  }
});



module.exports = router;
