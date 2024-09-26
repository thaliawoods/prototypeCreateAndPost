import { Seo } from '@/ui/components/seo';
import { Typography } from '@/ui/design-system/typography/typography';
 
export default function Home() {
    return (
      <>
        <Seo title="Create and Post" description="Description..."/>

        <div className="space-y-5">
        <Typography>Create and Post</Typography>
        <Typography theme="primary" variant="body-lg" component="h1">
          Create and Post
        </Typography>
        <Typography theme="secondary" variant="lead" component="div">
          Create and Post
        </Typography>
        <Typography variant="body-sm" component="div">
          Create and Post
        </Typography>
        <Typography variant="caption4" component="div">
          Create and Post
        </Typography>
        <Typography variant="caption4" weight="medium" component="div">
          Create and Post
        </Typography>
        </div>
      </>  
    );
}