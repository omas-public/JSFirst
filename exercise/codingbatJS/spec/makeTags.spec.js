/* eslint-env jest */
/* question

The web is built with HTML strings like "<i>Yay</i>" which draws Yay as italic text. In this example, the "i" tag makes <i> and </i> which surround the word "Yay". Given tag and word strings, create the HTML string with tags around the word, e.g. "<i>Yay</i>".

makeTags("i", "Yay") → "<i>Yay</i>"
makeTags("i", "Hello") → "<i>Hello</i>"
makeTags("cite", "Yay") → "<cite>Yay</cite>"
*/


const makeTags = (tag, word) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('makeTags(tag, word)', () => {

  it('makeTags("i", "Yay") -> "<i>Yay</i>"', () => {
    expect(makeTags("i", "Yay")).toBe("<i>Yay</i>")
  })

  it('makeTags("i", "Hello") -> "<i>Hello</i>"', () => {
    expect(makeTags("i", "Hello")).toBe("<i>Hello</i>")
  })

  it('makeTags("cite", "Yay") -> "<cite>Yay</cite>"', () => {
    expect(makeTags("cite", "Yay")).toBe("<cite>Yay</cite>")
  })

  it('makeTags("address", "here") -> "<address>here</address>"', () => {
    expect(makeTags("address", "here")).toBe("<address>here</address>")
  })

  it('makeTags("body", "Heart") -> "<body>Heart</body>"', () => {
    expect(makeTags("body", "Heart")).toBe("<body>Heart</body>")
  })

  it('makeTags("i", "i") -> "<i>i</i>"', () => {
    expect(makeTags("i", "i")).toBe("<i>i</i>")
  })

  it('makeTags("i", "") -> "<i></i>"', () => {
    expect(makeTags("i", "")).toBe("<i></i>")
  })

})
