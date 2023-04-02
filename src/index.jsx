// Vendor
import _ from 'lodash';
// Components
import Loader from '~/components/loader';
import Error from '~/components/error';

// This helper inspects the results from one or more react-query useQuery calls.
// It decides what component should be rendered (Loader, Error, etc.) and
// returns it to the caller. This helps reduce tedious boilerplate code.
// More details for why this helper exists: https://hub3.slite.com/app/channels/L5CYwl~o3m/notes/1ADpoOKetN
//
// opts:
// - loaderProps: props for components/loader
// - errorProps: props for components/error
// - loaderComponent: override loader component
// - errorComponent: override error component
// - shouldShowLoaderWhenIdle: show the loader component while the request is idle.
const reactQueryRenderHelper = (reactQueryAttrs, opts = {}) => {
  const isLoading = _.some(reactQueryAttrs, { isLoading: true });

  const isIdle = _.some(reactQueryAttrs, { isIdle: true });

  if (isLoading || (opts.shouldShowLoaderWhenIdle && isIdle)) {
    return opts.loaderComponent || <Loader {...opts.loaderProps} />;
  }

  const isError = _.some(reactQueryAttrs, { isError: true });
  if (isError) {
    return opts.errorComponent || <Error {...opts.errorProps} />;
  }

  return undefined;
};

export default reactQueryRenderHelper;
