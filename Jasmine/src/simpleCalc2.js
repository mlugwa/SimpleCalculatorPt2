class SimpleCalc{

        add()
        {
                var i, sum;
                i = 0;
                sum = 0;

                while (i < arguments.length)
                        sum = sum + arguments[i++];
                return (sum);
        }

        multiply()
        {
                var i, multi;
                i = 0;
                multi = 1;

                while (i < arguments.length)
                        multi = multi * arguments[i++];
                return (multi);
        }
}
