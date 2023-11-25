    function digits(a) {
        if(a < 999 && a > 0) {
            return a.toString().length;
        } else {
            return "a soni 0 dan katta 999 dan kichik bolishi shart";
        }
    };

    console.log(digits())