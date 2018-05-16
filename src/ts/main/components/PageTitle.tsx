import * as React from 'react';
import Typography from 'material-ui/Typography';

/**
 * Props for PageTitle
 * @interface PageTitleProps
 */
interface PageTitleProps {
  pageTitle: string;
}
/**
 * Page Title
 * @param {PageTitleProps} props 
 * @returns 
 */
const PageTitle: React.StatelessComponent<PageTitleProps> = props => {
  return (
    <Typography variant="title" id="nabi-page-title">
        {props.pageTitle}
    </Typography>
  );
};

export default PageTitle;
