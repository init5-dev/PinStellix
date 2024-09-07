import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton
} from 'react-share'

const SocialShare = ({ postUrl }: { postUrl: string }) => {
  return (
    <div className='flex justify-center items-center'>
      <div className='p-2'>
        <FacebookShareButton url={postUrl}>
          <FacebookIcon size={24} round />
        </FacebookShareButton>
      </div>
      <div className='p-2'>
        <TwitterShareButton url={postUrl}>
          <TwitterIcon size={24} round />
        </TwitterShareButton>
      </div>
      <div className='p-2'>
        <LinkedinShareButton url={postUrl}>
          <LinkedinIcon size={24} round />
        </LinkedinShareButton>
      </div>
      <div className='p-2'>
        <RedditShareButton url={postUrl}>
          <RedditIcon size={24} round />
        </RedditShareButton>
      </div>
    </div>
  )
}

export default SocialShare