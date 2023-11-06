import Card from '../../components/card/card'
function market  ()  {

  return (
    <div className='App'>
      <Card imgproducto='https://m.media-amazon.com/images/I/61s0IaMcKtL.jpg' precio='$400' producto='Celular'/>
      <Card imgproducto='https://miphonemx.com/cdn/shop/products/H14affe3df38f4939b372c66fda9ad0a0n_jpg_960x960_jpg_800x.webp?v=1681744941' precio='$3,000' producto='Celular'/>
      <Card imgproducto='https://www.nyxcosmetics.com.mx/dw/image/v2/AATL_PRD/on/demandware.static/-/Sites-nyx-latam-master-ng-catalog/default/dwae026ee6/ProductImages/More/Espejo_Flip_Phone_Barbie_The_Movie/NYX-PMU-Makeup-Accessories-Mirror-BARBIE-FLIP-PHONE-MIRROR-BFPM01-0800897245627-Front.jpg' precio='$10,000' producto='Celular barbie'/>
    </div>    
  )
}
export default market;