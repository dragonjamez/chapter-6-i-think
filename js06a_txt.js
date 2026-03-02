"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Chapter case

      Order Form Code
      Author: jamey brandon
      Date: 3/2/2026  

      Filename: js06a.js
 */
window.addEventListener("load", function(){
      calcOrder()
      let orderForm = this.document.forms.orderForm
      let model = orderForm.elements.model
      model.focus()
      for (let i = 0; i < orderForm.elements.length; i++) {
            orderForm.elements[i].addEventListener("change", calcOrder)
      }
})
function calcOrder(){
      let mIndex = model.selectedIndex
      let mValue = model.options [mIndex].mValue
      let qIndex = orderForm.elements.qty.selectedIndex
      let quantity = orderForm.elements.qty[qIndex].mValue
      let modelCost = mValue*quantity
      orderForm.elements.modelCost.value = modelCost.toLocaleString("en-US", {style:"currency",currency: "USD"})
      let planValue = document.querySelector(('input[name="plan"]:checked').value)
      let planCost = planValue * quantity
      orderForm.elements.planCost.value = planCost.toLocaleString("en-US", {style:"currency",currency: "USD"})
      let subtotal = modelCost + planCost
      orderForm.elements.subtotal.value = subtotal.toLocaleString("en-US", {style:"currency",currency: "USD"})
      let salesTax = subtotal * 0.05
      orderForm.elements.salesTax.value = salesTax.toLocaleString("en-US", {style:"currency",currency: "USD"})
      let totalCost = subtotal + salesTax
      orderForm.elements.totalCost.value = totalCost.toLocaleString("en-US", {style:"currency",currency: "USD"})
      orderForm.elements.modelName.value = model.options[mIndex].text
      let selectedPlan = document.querySelector('input[name="plan"]:checked')
      orderForm.elements.PlanName.value = selectedPlan.labels[0].textContent
}


