
	let data = "Pellentesque ex eros, +380665433321 porttitor eu bibendum ac, aliquam tincidunt urna. Mauris tristique lobortis orci, nec varius magna convallis interdum. Etiam 5363 4567 8765 3454 pharetra tempor ex, vel eleifend (067) 678 44 21 odio lacinia (0562) 35-30-38 eget. Morbi maximus libero vitae aliquet facilisis. Vivamus 5674-2346-8945-0012 vitae quam nisi. Quisque 12/45 quis venenatis 5192722517688913 lacus. Sed ac lorem (050)567-45-33 nec leo pharetra 4556796335044346 dapibus sed eu +38067432112 ex. In hac 4913-8185-2881-4543  habitasse platea dictumst. In dignissim 5461158320267908 suscipit rutrum. Ut 4916 8494 1754 2904 luctus  sapien in risus 56th street auctor, ac placerat 067-678-44-21  quam malesuada. Pellentesque (056) 7783322 bibendum justo  5363 4567 87653 3455 tempus purus convallis, a viverra nunc ullamcorper. Nulla 5213 9203 2475 5355 eget lectus gravida, porta eros vitae, semper erat +39-926-1234567.  Aenean volutpat vehicula dui ut pharetra.";
	
	/*
		
	Необходимо выбрать !!валидные!! номера банковских карт и вывести их в формате 4 блока по 4 цифры.
	
	Например:
	
	5475 0330 3843 6453
	4539 1799 4927 2557
	...

	4556796335044346 ^[0-9]{16}$
	
	*/

	let re = /[0-9]{16}/g;

	let re2 = /([0-9]{4}).([0-9]{4}).([0-9]{4}).([0-9]{4})/g;

	let result = data.match(re);

	let result2 = data.match(re2);
	
	const rep = /\-|\ |\./g;

	let test = false;

	function checking(num){

		let sum = 0;

		for(let i = 0; i < num.length; i++){
        if(i % 2 == 0){
            sum = sum + num[i];
        }else {
            let n = num[i] * 2;
            sum = sum + (n > 9 ? n - 9 : n);
        }
    }

    if((sum % 10) == 0){

        test = true;

    }else{

        test = false;

    }

		return test;

	}
	
	//console.log(result2);

	for(let i = 0; i < result2.length; i++){

		result2[i] = result2[i].replace(rep, "");

		let glob = result2[i];

		glob = [...glob]
		.reverse()
		.map((item) => +item);

		//console.log('card', glob);

		//console.log('out', result2[i]);

		let test = checking(glob);

		//console.log(test);

		if(test == true){

			console.log('Vallible', result2[i]);

		}else{

			console.log('No vallible', result2[i]);

		}

	}

	//console.log(result2);
	//console.log(result);

	for (let item of result) {

		//console.log(item, typeof(item));
		
		let glob = item;

		glob = [...glob]
		.reverse()
		.map((item1) => +item1);

		let test = checking(glob);

		if(test == true){

			console.log('Vallible', item);

		}else{

			console.log('No vallible', item);

		}
		
	}
