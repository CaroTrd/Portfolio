const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);


const executeScroll = (targetRef) => scrollToRef(targetRef);

module.exports = executeScroll;