/* INSERT MARKDOWN POST HERE */
export const post = `
# Sample Post 2! 

## This is a paragraph title
This is a paragraph. This is a **bold statement**. 

<div class="test">You can insert HTML within the string</div>

<table style="border: 1px solid red">
    <tr>
        <td style="border: 1px solid black">You can also insert table HTML</td>
        <td>like this</td>
    </tr>
</table>
`

/* DO NOT CHANGE */
//document.getElementById("post").innerHTML = new showdown.Converter().makeHtml(post);