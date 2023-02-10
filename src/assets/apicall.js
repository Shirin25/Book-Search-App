function BooksByTitleOrAuthorName(){
    document.getElementById("output").innerHTML="";
    fetch("https://openlibrary.org/search.json?q="+document.getElementById("input").value)
    .then(a=>a.json())
    .then(response=>{
        table=document.createElement("table")
        
        var header = table.createTHead();
        var row= header.insertRow();
            title=row.insertCell();
            title.innerHTML="Title and Subtitle";
            author=row.insertCell();
            author.innerHTML="Author";
            first_publish_year=row.insertCell();
            first_publish_year.innerHTML="First Publish Year";
            latest_publish_year=row.insertCell();
            latest_publish_year.innerHTML="Latest Publish Year";
        for(var i=0;i<10;i++)
        {
            var row= table.insertRow();
            title=row.insertCell();
            title.innerHTML=response.docs[i].title;
            author=row.insertCell();
            author.innerHTML=response.docs[i].author_name[0];
            first_publish_year=row.insertCell();
            first_publish_year.innerHTML=response.docs[i].first_publish_year;
            latest_publish_year=row.insertCell();
            const arr = String(response.docs[i].publish_year).split(",");
            var maxV = arr[0];
            for (a of arr) {
                if (a > maxV) maxV = a;
            }
            latest_publish_year.innerHTML=maxV;

        }
        document.getElementById("output").appendChild(table);
        
       
    })

}