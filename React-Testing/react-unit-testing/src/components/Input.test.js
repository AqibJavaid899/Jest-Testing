import Input from './Input'
import { render, fireEvent, act } from '@testing-library/react'


// Defining testing w.r.t the Search Bar and conditionalText prop
describe("Testing the Input Component", () => {
    
    // Testing 1 - Checking whether or not the conditionalText will show up when (conditionalText = true) 
    it("Checking Text Rendering inc case of True", () => {
        // Getting the Ref of Input Component
        const { getByTestId } = render(<Input conditionalText={true} />)
        // Getting the Ref of Search Bar in Input Component
        const text = getByTestId('conditional')
        expect(text).toBeTruthy()
    })

    // Testing 2 - Checking whether or not the conditionalText will show up when (conditionalText = false) 
    it("Checking Text Rendering inc case of False", () => {
        // Getting the Ref of Input Component (using queryByTestId because it return 'null' in case of Element not found)
        const { queryByTestId } = render(<Input conditionalText={false} />)
        // Getting the Ref of Search Bar in Input Component
        const text = queryByTestId('conditional')
        expect(text).toBeFalsy()
    })

    // Testing 3 - Checking whether or not the User Input in the searchBar is correctly rendering in the paragraph tag
    it("Checking whether User Input is rendering correctly in <p> tag", async () => {
        await act(async () => {
            // Getting the Ref of Input Component
            const { getByTestId } = render(<Input conditionalText={true} />)
            // Getting the Ref of Search Bar and Paragraph Tag in Input Component
            const text = getByTestId('textBar')
            const para = getByTestId('userInput')
            // Assigning the Evaluation Text to the Input Tag
            let evalText = 'John Doe'
            // Using the Async/Await to pause the execution here before going to next step
            await fireEvent.change(text, { target: { value: evalText }})
            expect(para.innerHTML).toBe(`The Text is : ${evalText}`)
        })
    })
})