/*
 * NOT DELETE ----------------------------------------------------------------------
 * Chaordic Banner into /celulares/celulares
 *						/supermercado
 *						/televisores
 *
 */

if(
  	(/tecnologia\/celulares\/celulares/.test(location.pathname)) ||
	(/supermercado/.test(location.pathname)) || 
	(/tecnologia\/televisores-y-video\/televisores/.test(location.pathname)) ) {
  
  		$('<div linx-banner="top"> </div>').insertBefore(".category-banner-slider");

}
/*
 * END NOT DELETE ------------------------------------------------------------------
*/