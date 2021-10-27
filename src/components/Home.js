import React from 'react'
import htm from "./icons/3html.png"
import js from "./icons/js.png" 
import css from "./icons/css.png"
import rj from "./icons/rj.png"
import node from "./icons/node.png"
import mongo from "./icons/mongo.png"

function Home() {
    return (
        <div className='flex flex-col w-screen h-96    mt-10 p-2 top-0 left-0  items-center  sm:flex-col md:flex-col xl:flex-row 2xl:flex-row 3xl:flex-col'>
        
          <div className='ml-28  flex flex-col justify-between'>  <svg viewBox="0 0 131.6826329062167 80" className='w-60 ml-20  h-32 '><defs id="SvgjsDefs1065"></defs><g id="SvgjsG1066" featurekey="nRdZyp-0" transform="matrix(0.9095599488844407,0,0,0.9095599488844407,-7.032040819583796,-4.280852622239987)" fill="#a12559"><g xmlns="http://www.w3.org/2000/svg"><path d="M69.5273438,59.4287109c2.5869141-3.5,6.9726562-12.2026367,8.1689453-19.7670898   c1.1884766-7.5131836-1.1591797-17.4536133-5.4599609-23.1225586C67.0585938,9.7290039,58.140625,5.2314453,48.9619141,4.8012695   c-10.6601562-0.4931641-17.984375,0.9238281-23.7421875,4.5981445   c-6.7578125,4.3115234-9.2294922,10.9238281-10.1142578,15.7114258c-0.3037109,1.6435547-0.6621094,2.8652344-0.9511719,3.847168   c-0.6347656,2.1611328-1.0546875,3.5893555,0.0673828,6.1586914c0.9150391,2.0957031,0.3642578,4.3168945-1.7832031,7.2021484   l-0.6425781,0.8574219c-2.2197266,2.953125-4.3164062,5.7421875-4.0400391,7.7241211   c0.2822266,2.1064453,2.4023438,2.7988281,3.4208984,3.1308594c0.1542969,0.0498047,0.2900391,0.09375,0.3964844,0.1357422   c0.1210938,0.0488281,0.2646484,0.0927734,0.4199219,0.1376953c0.3339844,0.0986328,0.5751953,0.1787109,0.6367188,0.3144531   c0.0449219,0.0966797,0.2236328,0.6679688-0.5869141,2.4433594l-0.1132812,0.2421875   c-0.421875,0.890625-1.2353516,2.6035156,0.6386719,4.2236328c-0.4951172,0.5478516-0.6025391,1.0820312-0.5771484,1.7128906   l0.0039062,0.1689453c-0.0146484,0.7666016,0.4443359,1.3154297,0.8134766,1.7558594   c0.5185547,0.6201172,0.9287109,1.1103516,0.6445312,2.2939453c-0.3232422,1.3222656-0.9335938,4.6171875,0.3701172,6.6328125   C14.3320312,74.8779297,15.0839844,75.3828125,16,75.5517578c3.3701172,0.6191406,5.8134766,0.3808594,7.96875,0.1708984   c1.0585938-0.1035156,2.0644531-0.1953125,3.0703125-0.1845703c1.59375,0.0253906,3.1425781,0.9648438,3.5263672,2.1357422   c0.6611328,2.0429688,1.2988281,5.6054688,0.9179688,8.921875c-0.2636719,2.3017578-0.6679688,3.109375-1.4013672,4.5751953   l-0.7460938,1.4902344l42.1972656-0.0107422l-0.5791016-1.3857422   c-4.2294922-10.1083984-5.7392578-16.7246094-5.3867188-23.5986328   C65.6757812,65.5195312,66.8974609,62.9794922,69.5273438,59.4287109z M68.5371094,90.6503906l-35.9970703,0.0107422   c0.4189453-0.9804688,0.7236328-2.0341797,0.9296875-3.8378906c0.4179688-3.6337891-0.2783203-7.5322266-1.0029297-9.7675781   c-0.6533203-1.9990234-2.9228516-3.4785156-5.3955078-3.5175781c-0.0888672-0.0009766-0.1767578-0.0019531-0.2646484-0.0019531   c-1.0273438,0-2.0039062,0.0957031-3.0332031,0.1962891c-2.1210938,0.2060547-4.3154297,0.4208984-7.4111328-0.1474609   c-0.3759766-0.0693359-0.6494141-0.2529297-0.859375-0.578125c-0.59375-0.9169922-0.6357422-2.9082031-0.1054688-5.0761719   c0.5195312-2.1660156-0.4658203-3.3447266-1.0556641-4.0478516c-0.1367188-0.1640625-0.3232422-0.3867188-0.3466797-0.4375   c0.0009766-0.0966797-0.0019531-0.1904297-0.0058594-0.2832031c-0.0019531-0.0722656-0.0068359-0.1806641,0-0.2080078   c0.0009766-0.0019531,0.0830078-0.2021484,0.7890625-0.6298828l1.4941406-0.9042969l-1.5361328-0.8310547   c-1.7119141-0.9257812-1.4736328-1.4277344-0.9990234-2.4267578l0.1269531-0.2714844   c0.8378906-1.8388672,1.0244141-3.1416016,0.5849609-4.1025391c-0.4462891-0.9775391-1.3876953-1.2539062-1.8925781-1.4023438   c-0.0898438-0.0253906-0.1728516-0.0488281-0.2441406-0.0771484c-0.1396484-0.0546875-0.3154297-0.1132812-0.515625-0.1787109   c-1.0234375-0.3339844-1.9521484-0.7001953-2.0595703-1.5004883c-0.1630859-1.1694336,2.1357422-4.2275391,3.6572266-6.2514648   l0.6474609-0.8647461c1.6308594-2.1904297,3.6142578-5.5263672,2.0126953-9.1967773   c-0.8310547-1.9033203-0.5820312-2.7495117,0.0185547-4.7944336C16.375,28.4960938,16.75,27.2192383,17.0722656,25.4741211   c0.8125-4.3974609,3.0712891-10.4638672,9.2236328-14.3891602c5.3886719-3.4384766,12.3544922-4.7602539,22.5732422-4.2856445   c8.6025391,0.402832,16.9462891,4.5986328,21.7744141,10.949707c3.9414062,5.1943359,6.171875,14.6821289,5.078125,21.6000977   c-1.0957031,6.9199219-5.2353516,15.4174805-7.8017578,18.8891602c-2.9179688,3.9394531-4.21875,6.7285156-4.3505859,9.3261719   C63.2167969,74.4404297,64.6171875,81.0068359,68.5371094,90.6503906z"></path><path d="M35.1503906,46.1977539h20.6660156V25.5317383H35.1503906V46.1977539z M37.1503906,27.5317383h16.6660156v16.6660156   H37.1503906V27.5317383z"></path><path d="M44.9951172,14.597168v10.6552734h2V14.597168c0-1.9023438-1.5478516-3.4501953-3.4501953-3.4501953h-3.1884766v2   h3.1884766C44.3583984,13.1469727,44.9951172,13.7841797,44.9951172,14.597168z"></path><rect x="49.6113281" y="18.4858398" width="2" height="6.7666016"></rect><rect x="40.0058594" y="18.4858398" width="2" height="6.7666016"></rect><path d="M45.9726562,56.9277344V46.2724609h-2v10.6552734c0,1.9023438,1.546875,3.4501953,3.4492188,3.4501953h3.1894531v-2   H47.421875C46.609375,58.3779297,45.9726562,57.7412109,45.9726562,56.9277344z"></path><rect x="39.3564453" y="46.2724609" width="2" height="6.7666016"></rect><rect x="48.9619141" y="46.2724609" width="2" height="6.7666016"></rect><path d="M20.9052734,37.8388672v3.1884766h2v-3.1884766c0-0.8129883,0.6367188-1.4501953,1.4501953-1.4501953h10.6552734v-2   H24.3554688C22.453125,34.3886719,20.9052734,35.9365234,20.9052734,37.8388672z"></path><rect x="28.2441406" y="29.7729492" width="6.7666016" height="2"></rect><rect x="28.2441406" y="39.3779297" width="6.7666016" height="2"></rect><path d="M70.1357422,33.9614258v-3.1884766h-2v3.1884766c0,0.8129883-0.6367188,1.4501953-1.4501953,1.4501953H56.03125v2   h10.6542969C68.5878906,37.4116211,70.1357422,35.8637695,70.1357422,33.9614258z"></path><rect x="56.03125" y="40.0273438" width="6.765625" height="2"></rect><rect x="56.03125" y="30.4223633" width="6.765625" height="2"></rect><path d="M39.2529297,42.0756836h12.4609375v-12.421875H39.2529297V42.0756836z M41.2529297,31.6538086h8.4609375v8.421875   h-8.4609375V31.6538086z"></path></g></g><g id="SvgjsG1067" featurekey="Q4qmbg-0" transform="matrix(6.5868260463862605,0,0,6.5868260463862605,82.28143755831975,-58.73652092772521)" fill="#5f1854"></g></svg>
      <div className='flex  -ml-4  mt-6     '> <img src={htm}  className="w-10  ml-4 h-10" alt="/"/>  <img src={css}  className="w-10 ml-4 h-10" alt="/"/>  <img src={js}  className="w-10 ml-4 h-10" alt="/"/> <img src={rj}  className="w-10 ml-4 h-10" alt="/"/><img src={node}  className="w-10 ml-4 h-10" alt="/"/> <img src={mongo}  className="w-10 ml-4 h-10" alt="/"/></div>   </div></div>
    )
}

export default Home