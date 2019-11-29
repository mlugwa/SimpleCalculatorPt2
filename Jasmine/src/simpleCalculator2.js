class SimpleCalc{

        constructor()
        {
                this.last = null;
		this.slots = [];
        }

        add()
        {
                var i, sum;
                var lastExists = false;
                var slotNum;
                i = 0;
                sum = 0;

                while (i < arguments.length)
                {

                        if (arguments[i] === "LAST")
                        {
                                lastExists = true;
                                i++;
                        }
			if (arguments[i] === "SLOT_1")
				arguments[i] = this.get_slot(1);
			if (arguments[i] === "SLOT_2")
				arguments[i] = this.get_slot(2);

			if (i === arguments.length)
                                break ;
                        sum = sum + arguments[i++];
                }
                if (lastExists)
		{
			var temp = this.last;
			this.last = sum + this.last;
			return (sum + temp);
		}
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
			if (arguments[i] === "SLOT_1")
				arguments[i] = this.get_slot(1);
			if (arguments[i] === "SLOT_2")
				arguments[i] = this.get_slot(2);
                        if (i === arguments.length)
                                break ;

                        multi = multi * arguments[i++];
                }
		if (lastExists)
                {
			var temp = this.last;
			this.last = multi * this.last;
			return (multi * temp);
		}
                else
                {
                        this.last = multi;
                        return (multi);
                }
        }

	set_slot(slotNum)
	{
		this.slots.push(this.last);
	}

	get_slot(slotNum)
	{
		return (this.slots[slotNum - 1]);	
	}

}
