import React from 'react';

import author from 'shared/assets/images/author-avata-2.jpg';
import author1 from 'shared/assets/images/author-avata-1.jpg';
import thumb from 'shared/assets/images/thumb/thumb-1240x700.jpg';
import thumb2 from 'shared/assets/images/thumb/thumb-512x512-2.jpg';
import thumb3 from 'shared/assets/images/thumb/thumb-512x512-3.jpg';
import thumb4 from 'shared/assets/images/thumb/thumb-512x512-4.jpg';

const Post = () => {
    return (
        <main id="content">
            <div className="container">
                <div className="entry-header">
                    <div className="mb-5">
                        <h1 className="entry-title m_b_2rem">
                            In 21st-century Korea, shamanism is not only thriving — but evolving
                    </h1>
                        <div className="entry-meta align-items-center">
                            <a className="author-avatar" href="#"><img src={author} alt="" /></a>
                            <a href="author.html">Darcy Reeder</a> in <a href="archive.html">OneZero</a><br />
                            <span>Jun 17</span>
                            <span className="middotDivider"></span>
                            <span className="readingTime" title="3 min read">3 min read</span>
                            <span className="svgIcon svgIcon--star">
                                <svg className="svgIcon-use" width="15" height="15">
                                    <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <figure className="image zoom mb-5">
                    <img src={thumb} alt="post-title" />
                </figure>
                <article className="entry-wraper mb-5">
                    <div className="entry-left-col">
                        <div className="social-sticky">
                            <a href="#"><i className="icon-facebook"></i></a>
                            <a href="#"><i className="icon-twitter"></i></a>
                            <a href="#"><i className="icon-heart"></i></a>
                            <a href="#"><i className="icon-paper-plane"></i></a>
                        </div>
                    </div>
                    <div className="excerpt mb-4">
                        <p>Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far bald that roadrunner python inside held shrewdly the manatee.</p>
                    </div>
                    <div className="entry-main-content dropcap">
                        <p>Gosh jaguar ostrich quail one excited dear hello and <a href="#">bound</a><sup><a href="#">[1]</a></sup> and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far bald that roadrunner python inside held shrewdly the manatee.</p>
                        <p>Thanks sniffed in hello after in foolhardy and some far purposefully much one at the much conjointly leapt skimpily that quail sheep some goodness <a href="#">nightingale</a> the instead exited expedient up far ouch mellifluous altruistic and and lighted more instead much when ferret but the.</p>
                        <hr className="section-divider" />
                        <p>Yet more some certainly yet alas abandonedly whispered <a href="#">intriguingly</a><sup><a href="#">[2]</a></sup> well extensive one howled talkative admonishingly below a rethought overlaid dear gosh activated less <a href="#">however</a> hawk yet oh scratched ostrich some outside crud irrespective lightheartedly and much far amenably that the elephant since when.</p>
                        <h2>The Guitar Legends</h2>
                        <p>Furrowed this in the upset <a href="#">some across</a><sup><a href="#">[3]</a></sup> tiger oh loaded house gosh whispered <a href="#">faltering alas</a><sup><a href="#">[4]</a></sup> ouch cuckoo coward in scratched undid together bit fumblingly so besides salamander heron during the jeepers hello fitting jauntily much smoothly globefish darn blessedly far so along bluebird leopard and.</p>
                        <blockquote><p>Integer eu faucibus <a href="#">dolor</a><sup><a href="#">[5]</a></sup>. Ut venenatis tincidunt diam elementum imperdiet. Etiam accumsan semper nisl eu congue. Sed aliquam magna erat, ac eleifend lacus rhoncus in.</p></blockquote>
                        <p>Fretful human far recklessly while caterpillar well a well blubbered added one a some far whispered rampantly whispered while irksome far clung irrespective wailed more rosily and where saluted while black dear so yikes as considering recast to some crass until cow much less and rakishly overdrew consistent for by responsible oh one hypocritical less bastard hey oversaw zebra browbeat a well.</p>
                        <h3>Getting Crypto Rich</h3>
                        <p>And far contrary smoked some contrary among stealthy engagingly suspiciously a cockatoo far circa sank dully lewd slick cracked llama the much gecko yikes more squirrel sniffed this and the the much within uninhibited this abominable a blubbered overdid foresaw through alas the pessimistic.</p>
                        <p>Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far bald that roadrunner python inside held shrewdly the manatee.</p>
                        <hr className="section-divider" />
                        <p>Thanks sniffed in hello after in foolhardy and some far purposefully much one at the much conjointly leapt skimpily that quail sheep some goodness nightingale the instead exited expedient up far ouch mellifluous altruistic and and lighted more instead much when ferret but the.</p>

                        <div className="border p-5 bg-lightblue mb-5">
                            <div className="row justify-content-between">
                                <div className="col-md-5 mb-2 mb-md-0">
                                    <h5 className="font-weight-bold secondfont mb-3 mt-0">Become a member</h5>
                                    <p className="small-text">Get the latest news right in your inbox. We never spam!</p>
                                </div>
                                <div className="col-md-7">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <input type="text" className="form-control" placeholder="Enter your e-mail address" />
                                        </div>
                                        <div className="col-md-12 mt-2">
                                            <button type="submit" className="btn btn-success btn-block">Subscribe</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p>Yet more some certainly yet alas abandonedly whispered intriguingly well extensive one howled talkative admonishingly below a rethought overlaid dear gosh activated less however hawk yet oh scratched ostrich some outside crud irrespective lightheartedly and much far amenably that the elephant since when.</p>
                    </div>
                    <div className="entry-bottom">
                        <div className="tags-wrap heading">
                            <span className="tags">
                                <a href="#" rel="tag">fashion</a>
                                <a href="#" rel="tag">lifestyle</a>
                                <a href="#" rel="tag">news</a>
                                <a href="#" rel="tag">style</a>
                            </span>
                        </div>
                    </div>
                    <div className="box box-author m_b_2rem">
                        <div className="post-author row-flex">
                            <div className="author-img">
                                <img alt="author avatar" src={author1} className="avatar" />
                            </div>
                            <div className="author-content">
                                <div className="top-author">
                                    <h5 className="heading-font"><a href="author.html" title="Ryan" rel="author">Ryan Mark</a></h5></div>
                                <p className="d-none d-md-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet ut ligula et semper. Aenean consectetur, est id gravida venenatis.</p>
                                <div className="content-social-author">
                                    <a target="_blank" className="author-social" href="#">Facebook </a>
                                    <a target="_blank" className="author-social" href="#">Twitter </a>
                                    <a target="_blank" className="author-social" href="#"> Google + </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>


                <div className="related-posts mb-5">
                    <h4 className="spanborder text-center">
                        <span>Related Posts</span>
                    </h4>
                    <div className="row justify-content-between">
                        <div className="divider-2"></div>
                        <article className="col-md-4">
                            <div className="mb-3 d-flex row">
                                <figure className="col-md-5"><a href="single.html"><img src={thumb2} alt="post-title" /></a></figure>
                                <div className="entry-content col-md-7 pl-md-0">
                                    <h5 className="entry-title mb-3"><a href="single.html">Is ‘Interactive Storytelling’ the Future of Media?</a></h5>
                                    <div className="entry-meta align-items-center">
                                        <a href="author.html">Furukawa</a> in <a href="archive.html">Programing</a><br />
                                        <span>March 14</span>
                                        <span className="middotDivider"></span>
                                        <span className="readingTime" title="3 min read">6 min read</span>
                                        <span className="svgIcon svgIcon--star">
                                            <svg className="svgIcon-use" width="15" height="15">
                                                <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="col-md-4">
                            <div className="mb-3 d-flex row">
                                <figure className="col-md-5"><a href="single.html"><img src={thumb3} alt="post-title" /></a></figure>
                                <div className="entry-content col-md-7 pl-md-0">
                                    <h5 className="entry-title mb-3"><a href="single.html">How NOT to get a $30k bill from Firebase</a></h5>
                                    <div className="entry-meta align-items-center">
                                        <a href="author.html">Glorida</a> in <a href="archive.html">Living</a><br />
                                        <span>April 14</span>
                                        <span className="middotDivider"></span>
                                        <span className="readingTime" title="3 min read">7 min read</span>
                                        <span className="svgIcon svgIcon--star">
                                            <svg className="svgIcon-use" width="15" height="15">
                                                <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="col-md-4">
                            <div className="mb-3 d-flex row">
                                <figure className="col-md-5"><a href="single.html"><img src={thumb4} alt="post-title" /></a></figure>
                                <div className="entry-content col-md-7 pl-md-0">
                                    <h5 className="entry-title mb-3"><a href="single.html">Google Can’t Figure Out What YouTube Is</a></h5>
                                    <div className="entry-meta align-items-center">
                                        <a href="author.html">Rayan Mark</a> in <a href="archive.html">GEN</a><br />
                                        <span>Jun 14</span>
                                        <span className="middotDivider"></span>
                                        <span className="readingTime" title="3 min read">8 min read</span>
                                        <span className="svgIcon svgIcon--star">
                                            <svg className="svgIcon-use" width="15" height="15">
                                                <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>



                <div className="single-comment comments_wrap">
                    <section id="comments">
                        <div className="comments-inner clr">
                            <div id="respond" className="comment-respond">
                                <h3 id="reply-title" className="comment-reply-title">Leave a Reply</h3>
                                <form action="#" method="post" id="commentform" className="comment-form" novalidate="">
                                    <p className="comment-notes">
                                        <span id="email-notes">Your email address will not be published.</span> Required fields are marked <span className="required">*</span>
                                    </p>
                                    <p className="comment-form-comment">
                                        <label for="comment">Comment</label>
                                        <textarea id="comment" name="comment" cols="45" rows="8" maxlength="65525" required="required"></textarea>
                                    </p>
                                    <div className="row">
                                        <div className="comment-form-author col-sm-12 col-md-6">
                                            <p>
                                                <label for="author">Name*</label>
                                                <input id="author" name="author" type="text" value="" size="30" aria-required="true" />
                                            </p>
                                        </div>
                                        <div className="comment-form-email col-sm-12 col-md-6">
                                            <p>
                                                <label for="email">Email*</label>
                                                <input id="email" name="email" type="email" value="" size="30" aria-required="true" />
                                            </p>
                                        </div>
                                    </div>
                                    <p className="form-submit">
                                        <input name="submit" type="submit" id="submit" className="submit btn btn-success btn-block" value="Post Comment" />
                                    </p>
                                </form>
                            </div>

                        </div>
                    </section>
                </div>

            </div>
        </main>
    );
}

export default Post;
