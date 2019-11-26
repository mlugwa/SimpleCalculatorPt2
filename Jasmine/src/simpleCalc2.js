class SimpleCalc{

	constructor()
	{
		this.last = null;
	}
	
        add()
        {
                var i, sum;
		var lastExists = false;
		var slotNum;
                i = 0;
                sum = 0;

                while (i < arguments.length)
		{ // Checking for "LAST" argument
			if (arguments[i] === "LAST")
			{
				lastExists = true;
				i++;
			}

			if (typeof arguments[i] === 'string' && arguments[i] !== "LAST")
			{
				if (arguments[i] === "SLOT_1")
				{
					slotNum = this.slots.slot_1;
					console.log(slotNum);
				}
					
				else if (arguments[i] === "SLOT_2")
					slotNum = this.slots.slot_2;
				else if (arguments[i] === "SLOT_3")
					slotNum = this.slots.slot_3;
				else if (arguments[i] === "SLOT_4")
					slotNum = this.slots.slot_4;
				else if (arguments[i] === "SLOT_5")
					slotNum = this.slots.slot_5;
			}
					
			if (i === arguments.length)
				break ; 
                        sum = sum + arguments[i++];
		}
		if (lastExists) //if lastExists is true
			return (sum + this.last);
		else if (slotNum !== 'undefined')
			return (sum + slotNum);
		else
		{
			this.last = sum;
                	return (sum);
		}
        }

        multiply()
        {
                var i, multi;
		var lastExists = false;

                i = 0;
                multi = 1;

                while (i < arguments.length)
		{
			if (arguments[i] === "LAST")
			{
				lastExists = true;
				i++;
			}
			if (i === arguments.length)
				break ;
			
                        multi = multi * arguments[i++];
		}
		if (lastExists)
			return (multi * this.last);
		else
		{
			this.last = multi;
                	return (multi);
		}
        }

	set_slot(slotNum)
	{
		this.slots = [];
		if (slotNum > 5)
			throw new Error("Sorry, there are only 5 slots available.");
		if (slotNum === 1)
			return (this.slots.push({slot_1: this.last}));
		else if (slotNum === 2)
			this.slots.push({slot_2: this.last});
		else if (slotNum === 3)
			this.slots.push({slot_3: this.last});
		else if (slotNum === 4)
			this.slots.push({slot_4: this.last});
		else if (slotNum === 5)
			this.slots.push({slot_5: this.last});
	}

	get_slot(slotNum)
	{
		return (this.slots[slotNum -1]);
	}

}

// Testing


var test = new SimpleCalc();
//console.log(test.multiply(2,3));
test.set_slot(1);
//console.log(test.slots.slot_1);
//console.log(test.add("SLOT_1",3));

