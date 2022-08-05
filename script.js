for (var x = 0; x < 10; x++){
    for (var y = 0; y < 10; y++){
        if (x==y )
        document.write(' * ')
        else {
            document.write(' _ ')
        }
    }
    document.write ('<br/>')
}
document.write('<br/>')

for (var x = 0; x < 10; x++){
    for (var y = 0; y < 10; y++){
        if (x + y ==9 )
        document.write(' * ')
        else {
            document.write(' _ ')
        }
    }
    document.write ('<br/>')
}
document.write('<br/>')

for (var x = 0; x < 10; x++){
    for (var y = 0; y < 10; y++){
        if (x==y || x+y ==9)
        document.write(' * ')
        else {
            document.write(' _ ')
        }
    }
    document.write ('<br/>')
}
document.write('<br/>')

for (var x = 0; x < 10; x++){
    for (var y = 0; y < 10; y++){
        if (x+y ==9 || x==y)
        document.write(' 0 ')
        else {
            document.write(' _ ')
        }
    }document.write ('<br/>')
}
document.write ('<br/>')

for (var x = 0; x < 11; x++){
    for (var y = 0; y < 11; y++){
        if (y==5 || x==5 || x==y || x+y ==10)
        document.write(' * ')
        else {
            document.write(' _ ')
        }

    }document.write ('<br/>')
    
}document.write ('<br/>')

for (var x = 0; x < 10; x++){
    for (var y = 0; y < 10; y++){
        if (x==y || x+y ==9)
        document.write(' * ')
        else {
            document.write(' _ ')
        }
         if(y == 4)
        document.write(' * ')

    }
    document.write ('<br/>')
}
document.write('<br/>')

for (var x = 0; x < 11; x++){
    for (var y = 0; y < 11; y++){
        if ( x==5 || x==y || x+y ==10)
        document.write(' * ')
        else {
            document.write(' _ ')
        }
    }document.write ('<br/>')
    
}

document.write ('<br/>')
for (var x = 0; x < 10; x++){
    for (var y = 0; y < 10; y++){

        if (x== 4)
        document.write(' * ')
        else {
            document.write(' _ ')
        }
         if(y == 4)
        document.write(' * ')
    }
    document.write ('<br/>')
}
