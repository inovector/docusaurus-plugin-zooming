import siteConfig from '@generated/docusaurus.config';
import Zooming from 'zooming'

const { themeConfig } = siteConfig;

export default (function () {
    if (typeof window === 'undefined') {
        return null;
    }
    
    const  {zooming: defaultParams} = themeConfig;

    const selector = defaultParams?.selector || '.markdown img';
    const delay = defaultParams?.delay || 500;
    let zoomingOptions = defaultParams?.options || {};
   
    const zooming = new Zooming();

    const setZoomingConfig = () => {
        const isDarkMode = document.querySelector('html[data-theme="dark"]');

        zoomingOptions.bgColor = isDarkMode
        ? defaultParams?.background?.dark || 'rgb(50, 50, 50, 0.9)'
        : defaultParams?.background?.light || 'rgb(255, 255, 255, 0.9)';

        zooming.config(zoomingOptions);
    };

    // First load
    setTimeout(()=> {
        zooming.listen(selector);

        setZoomingConfig();
    }, delay);

    // Update on theme change
    const observer = new MutationObserver(function () {
        if (!zooming) {
            return;
        }

        setZoomingConfig();
    });
    
    observer.observe(document.querySelector('html'), {
        attributes: true,
        attributeFilter: ['data-theme'],
    });  

    // Update on route change
    return {
        onRouteUpdate() {
          setTimeout(() => {
            if (!zooming) {
                return;
            }
    
            zooming.listen(selector);

            setZoomingConfig();
          }, delay);
        },
      };
})();